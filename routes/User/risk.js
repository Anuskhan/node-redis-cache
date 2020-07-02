const express = require('express');
const route = express.Router();
const redisGetData = require("../../utils/redisGetDataFromCache")
const { getRisk } = require('../../controller/Risk/risk');

route.post('/', redisGetData.SearchGetRisk, getRisk);

module.exports = route;