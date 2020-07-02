const express=require('express');
const router=express.Router();
const login=require('../../controller/login');
const register=require('../../controller/register');
const OTPvarify=require('../../controller/OTPvarify');

router.get('/',(req,res)=>{
    res.send("Auth")
})

router.post('/register',register);

router.post('/login',login);

router.post('/OTPvarify',OTPvarify);

module.exports=router;