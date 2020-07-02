const express = require('express');
const route = express.Router();
const { getDetail } = require('../../controller/Life/detail');
const { getLife } = require('../../controller/Life/life');
const { getQuotes } = require('../../controller/Life/quotes');
const redisGetDataFromCache = require("../../utils/redisGetDataFromCache")


route.get('/', redisGetDataFromCache.getLife, getLife);

route.post('/getDetail', redisGetDataFromCache.getByIdLifedetail, getDetail);

route.post('/getQuotes', redisGetDataFromCache.SearchQuote, getQuotes);

module.exports = route;