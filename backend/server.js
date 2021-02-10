const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('./routes/admin');
const blog = require('./routes/blog');
const mentee = require('./routes/mentee');
const mentor = require('./routes/mentor');
const isLoggedin = require('./controller/auth');

const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/admin', admin);
app.use('/blog', blog);
app.use('/mentee', mentee);
app.use('/mentor', mentor);
app.use('/isLoggedin', isLoggedin.isLoggedin);

app.listen(port);
