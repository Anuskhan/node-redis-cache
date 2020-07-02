const express=require('express');
const route=express.Router();
const {getMetaData}=require('../../controller/Others/metaData');

route.post('/',getMetaData);

module.exports=route;