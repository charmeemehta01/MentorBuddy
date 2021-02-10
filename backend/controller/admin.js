const jwt = require('jsonwebtoken');
var sql = require('../db/db_config');

module.exports = {

    authenticate: function(req, res) {
        sql.query('select * from admin where email = ? and password = ?', [req.body.email, req.body.password], (err, result) => {
            if (result.length == 1) {
                console.log("Done");
                const token = jwt.sign({
                        email: req.body.email,
                    },
                    'TheMentorBuddySecretkey', {
                        expiresIn: '30d',
                    }
                );
                res.status(200).json({ status: "success", token: token });
            } else {
                res.status(404).json({ status: "error", msg: "Error: Please try again" });
            }
        });
    },

    deleteMentor: function(req, res, next) {
        console.log(req.body);
        sql.query('DELETE FROM mentor WHERE mentor_id = ?', [req.body.mid], (err, result) => {
            console.log(result);

            if (result.affectedRows == 1)
                res.json({ status: "success" });
            else
                res.json({ status: "oops" });
        });

    },

    revokeMentor: function(req, res, next) {
        sql.query('UPDATE mentor SET Flag=0 WHERE mentor_id = ?', [req.body.mid], (err, result) => {
            console.log(result);

            if (result.affectedRows == 1)
                res.json({ status: "success" });
            else
                res.json({ status: "oops" });
        });
    },

    resumeMentor: function(req, res, next) {
        sql.query('UPDATE mentor SET Flag=1 WHERE mentor_id = ?', [req.body.mid], (err, result) => {
            console.log(result);

            if (result.affectedRows == 1)
                res.json({ status: "success" });
            else
                res.json({ status: "oops" });
        });
    },

    deleteMentee: function(req, res, next) {
        sql.query('DELETE FROM mentee WHERE email = ?', [req.body.email], (err, result) => {
            console.log(result);

            if (result.affectedRows == 1)
                res.json({ status: "success" });
            else
                res.json({ status: "oops" });
        })
    },

    getAllMentee: function(req, res, next) {
        sql.query('select * from mentee', (err, result) => {
            if (err) {
                res.json({ status: 'error', msg: 'Error: Please try again' });
            } else {
                console.log(result);
                res.json({ status: 'success', data: result });
            }
        });
    },

    getAllSession: function(req, res, next) {
        sql.query('select * from sessions', (err, result) => {
            if (err) {
                res.json({ status: 'error', msg: 'Error: Please try again' });
            } else {
                console.log(result);
                res.json({ status: 'success', data: result });
            }
        });
    },

    deleteSession: function(req, res, next) {
        console.log(req.body.sid);
        sql.query('DELETE FROM sessions WHERE session_id = ?', [req.body.sid], (err, result) => {
            console.log(result);

            if (result.affectedRows == 1)
                res.json({ status: "success" });
            else
                res.json({ status: "oops" });
        })
    },
}