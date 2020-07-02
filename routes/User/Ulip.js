const express = require('express');
const route = express.Router();
const redisGetData = require("../../utils/redisGetDataFromCache")

const { ulipList, nav, meta } = require('../../controller/Ulip/ulip_list');

route.get('/', redisGetData.UlipList, ulipList);

route.post('/nav', redisGetData.getByIdnav, nav);

route.post('/meta', redisGetData.getByIdmeta, meta);

module.exports = route;