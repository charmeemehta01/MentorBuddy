const express = require('express');
const router = express.Router();
const auth = require('../controller/auth');
const adminController = require('../controller/admin');

router.post('/signin', adminController.authenticate);
router.post('/deleteMentor', auth.isAuth, adminController.deleteMentor);
router.post('/revokeMentor', auth.isAuth, adminController.revokeMentor);
router.post('/resumeMentor', auth.isAuth, adminController.resumeMentor);
router.post('/deleteMentee', auth.isAuth, adminController.deleteMentee);
router.get('/getAllMentee', adminController.getAllMentee);
router.get('/getAllSessions', adminController.getAllSession);
router.post('/deleteSession', auth.isAuth, adminController.deleteSession);

module.exports = router;