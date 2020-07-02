const express=require('express');
const router=express.Router();
const setAdmin=require('../../controller/setAdmin');

router.post('/set_admin',setAdmin);
router.get('/',(req,res)=>{
    res.send("hello");
});

module.exports=router;