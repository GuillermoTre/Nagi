const express = require('express');
const musicalNumbersApi = express.Router();
const musicalNumbersController = require('../controllers/musicalNumbersController');

musicalNumbersApi.get('/musicalNumbers',musicalNumbersController.returnNumbers);

module.exports = musicalNumbersApi;