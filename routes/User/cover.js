const express = require('express');
const route = express.Router();
const redisGetDataFromCache = require("../../utils/redisGetDataFromCache")

const { Cover } = require('../../controller/Cover/cover');

route.post('/', redisGetDataFromCache.SearchCover, Cover);

module.exports = route;