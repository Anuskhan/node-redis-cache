const express = require('express');
const route = express.Router();
const redisGetData = require("../../utils/redisGetDataFromCache")
const { getOccupation, getDetailOccupation, getSalaryDetailOccupation } = require('../../controller/Occupation/occupation');

route.get('/', redisGetData.OcupationList, getOccupation);

route.post('/getDetail', redisGetData.getByIdGetDetailOccupation, getDetailOccupation);

route.post('/getSalaryDetails', redisGetData.getByIdGetSalaryDetailOccupation, getSalaryDetailOccupation);





module.exports = route;