const express = require('express');
const foodController = require('../controller/foodController');

const foodRouter = express.Router();

foodRouter.use('/food/:id', foodController.getById);
foodRouter.get('/food', foodController.getAll);
foodRouter.get('/food/search', foodController.searchByName);

module.exports = foodRouter;