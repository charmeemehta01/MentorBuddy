const fetch = require('node-fetch');
const querystring = require('querystring');
const { default: Axios } = require('axios');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const fs = require('fs');
var sql = require('../db/db_config');
const accountSid = 'AC042eccefc9f87b537e0096cb9a00d8cd';
const authToken = '18c9f838e85126b8be1a35e2ca07eee4';
const client = require('twilio')(accountSid, authToken);


let name = Date.now();
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public');
    },
    filename: function(req, file, cb) {
        cb(null, name + '-' + file.originalname);
    },
});
var upload = multer({ storage: storage }).single('file');

module.exports = {
    authenticate: async function(req, res) {
        const codee = req.headers.code;
        var access_token, email_id, name;

        if (codee == undefined) {
            return;
        }

        await Axios.post(
                'https://www.linkedin.com/oauth/v2/accessToken',
                querystring.stringify({
                    client_id: '78yw3iw4zyi2to',
                    grant_type: 'authorization_code',
                    redirect_uri: 'http://localhost:3000/linkedin',
                    client_secret: '1gzbGEJmsiNPs0j0',
                    code: codee,
                })
            )
            .then(function(res) {
                //console.log(res.data);
                access_token = res.data.access_token;
            })
            .catch(function(err) {
                console.log(err);
            });

        //console.log('Access token: ', access_token);
        await fetch('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            })
            .then(res => res.json())
            .then(data => (email_id = data.elements[0]['handle~'].emailAddress))
            .catch(function(err) {
                //console.log('Error: ', err);
            });

        await fetch('https://api.linkedin.com/v2/me', {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            })
            .then(res => res.json())
            .then(data => {
                name = data.localizedFirstName + ' ' + data.localizedLastName;
                //console.log(name);
            });
        //name, email_id;
        const token = jwt.sign({
                email: email_id,
                name: name,
            },
            'TheMentorBuddySecretkey', {
                expiresIn: '30d',
            }
        );
        console.log(token);
        sql.query('select * from mentee where email = ?', [email_id], (err, result) => {
            if (err) {
                res.json({ status: 'error', msg: 'Error: Please try again' });
            } else if (result.length == 1) {
                res.json({ status: 'success', email: email_id, name: name, jwt_token: token });
            } else if (result.length == 0) {
                sql.query('insert into mentee (name,email) values (?,?)', [name, email_id], (err, result) => {
                    if (err) {
                        res.json({ status: 'error', msg: 'Error: Please try again' });
                    } else {
                        res.json({ status: 'success', email: email_id, name: name, jwt_token: token });
                    }
                });
            }
        });
    },

    create_order: async function(req, res) {
        const razorpay = require('razorpay');
        let instance = new razorpay({
            key_id: 'rzp_test_NP9EZJoKZOJMZD',
            key_secret: 'PexS6gM6snFpOFTdbkDkEfLb',
        });
        let amount = parseFloat(req.headers.amount) * 100;
        instance.orders.create({
                amount: amount,
                currency: 'INR',
            },
            function(err, order) {
                if (err) {
                    console.log('error', err);
                    res.json({ success: 0, message: 'Sorry there is some error' });
                    return next();
                } else {
                    console.log(order);
                    res.json({ success: 1, message: 'Success', orderId: order.id });
                    return next();
                }
            }
        );
    },
    session: async function(req, res) {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'thementorbuddy@gmail.com', // generated ethereal user
                pass: 'adminMB123', // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'thementorbuddy@gmail.com', // sender address
            to: 'thementorbuddy@gmail.com', // list of receivers
            subject: 'Session created', // Subject line
            text: '', // plain text body
            html: `A session has been created with Mentor ${req.headers.mentor_id} by the user ${req.headers.mentee_id}`, // html body
        });

        console.log('Message sent: %s', info.messageId);
        client.messages
            .create({
                body: 'A session has been booked with ANSH MEHTA',
                from: '+14344326363',
                to: '+919820145991'
            })
            .then(message => {
                console.log(message.sid)
            })
            .done();

        sql.query(
            'insert into sessions (mentee_email, mentor_email) values (?,?)', [req.headers.mentee_id, req.headers.mentor_id],
            (err, result) => {
                if (err) {
                    console.log(err);
                    //whether to create log file
                } else {
                    res.json({ status: 'success' });
                }
            }
        );
    },

    sendFile: async function(req, res) {
        name = Date.now();
        await upload(req, res, function(err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err);
            } else if (err) {
                return res.status(500).json(err);
            }
            return res.status(200).send(req.file);
        });
    },
    sendMail: async function(req, res) {
        console.log('filename sendmail:', req.headers.filename);
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'thementorbuddy@gmail.com', // generated ethereal user
                pass: 'adminMB123', // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'thementorbuddy@gmail.com', // sender address
            to: req.headers.mentor_email, // list of receivers
            subject: 'Session created', // Subject line
            text: '', // plain text body
            attachments: [{
                path: `public/${req.headers.filename}`,
            }, ],
            html: `A session has been created by the user ${req.headers.mentee_email}. <br/> The user has sent the following attachments below. Check it out. `, // html body
        });
        console.log('Message sent: %s', info.messageId);

        fs.unlink(`public/${req.headers.filename}`, err => {
            console.log(err);
        });
        return res.status(200).json({ status: 'success' });
    },
};