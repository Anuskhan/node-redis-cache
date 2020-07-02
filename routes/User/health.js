const express = require('express');
const route = express.Router();
const redisGetDataFromCache = require("../../utils/redisGetDataFromCache")

const { getHealth, getHealthDetails, getHealthQuote } = require('../../controller/Health/health');

route.get('/', redisGetDataFromCache.getHealth, getHealth);

route.post('/getDetail', redisGetDataFromCache.getByIdGetHealthDetails, getHealthDetails);

route.post('/getQuotes', redisGetDataFromCache.getHealthQuote, getHealthQuote);

module.exports = route;