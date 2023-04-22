const express = require('express');
const router = express.Router();
// require task controller file
const userApi = require('../../../controllers/api/v1/user_api');

router.post('/singup',userApi.create);
router.post('/login',userApi.create_session)
router.use('/tasks',require('./tasks'));


module.exports = router;