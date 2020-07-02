const User=require('../model/user');
var bcrypt = require('bcryptjs');
const {sendSMS} = require('../utils/smsSender');

const register=(req,res)=>{
    const {mobile,name}=req.body;
    
    if(mobile&&mobile.length>=10){
        console.log("Mobile",mobile);
        User.findOne({phone_number:mobile})
        .then(user=>{
            if(user){
                res.status(404).send({messsage:"User already exist"});
            }else{
                const user=new User({
                    phone_number:mobile,
                    name:name
                });
                user.save(data=>{
                    console.log("Saved",data);
                    res.status(200).send({messsage:"User Registered"});
                })
            }
        })
    }
}

module.exports=register;