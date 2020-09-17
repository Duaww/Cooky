const express = require('express');
const userController = require('../controller/userController');

const userRouter = express.Router();

userRouter.get('/user/sign_up', userController.sign_up);
userRouter.get('/user/log_in', userController.log_in);

module.exports = userRouter;