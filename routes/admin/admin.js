const express=require('express');
const router=express.Router();
const getUser=require("../../controller/getUser");
const adminAuth=require('../../middleware/adminAuth');

router.get('/getUser',adminAuth,getUser);

module.exports=router;