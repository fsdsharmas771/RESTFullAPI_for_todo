const express = require('express');
const router = express.Router();
// tell router to use tasks.js for /tasks api
router.use('/user',require('./user'));


module.exports = router;