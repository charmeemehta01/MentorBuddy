const jwt = require('jsonwebtoken');

exports.isAuth = (req, res, next) => {
    const authHead = req.get('Authorization');
    if (!authHead) {
        res.status(401).json({
            message: 'Invalid',
        });
    }
    const token = authHead.split(' ')[1];
    let decodeToken;
    try {
        decodeToken = jwt.verify(token, 'TheMentorBuddySecretkey');
    } catch (err) {
        res.status(401).json({
            message: 'Invalid',
        });
    }
    if (!decodeToken) {
        res.status(401).json({
            message: 'Invalid',
        });
    }
    next();
};

exports.isLoggedin = (req, res, next) => {
    const authHead = req.get('Authorization');
    if (!authHead) {
        res.status(401).json({
            message: 'Invalid',
        });
    }
    const token = authHead.split(' ')[1];
    let decodeToken;
    try {
        decodeToken = jwt.verify(token, 'TheMentorBuddySecretkey');
    } catch (err) {
        res.status(401).json({
            message: 'Invalid',
        });
    }
    if (!decodeToken) {
        res.status(401).json({
            message: 'Invalid',
        });
    }
    res.status(200).json({
        status: 'true',
        code: 200
    });
};