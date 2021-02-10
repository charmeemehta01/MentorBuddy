const express = require('express');
const router = express.Router();
const blogController = require('../controller/blog');
const auth = require('../controller/auth');
router.post('/all', blogController.all);
router.post('/id/:blogID', blogController.BlogID);
router.post('/add', auth.isAuth, blogController.add);
module.exports = router;
