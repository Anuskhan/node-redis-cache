const User = require('../model/user');
const compare = require('../utils/passwordCompare');
const {jwtGenrate} = require('../utils/jwt');
const {smsSender}=require("../utils/smsSender");

const login=async (req,res)=>{
    const {mobile,name,code}=req.body;
    User.findOne({phone_number:mobile}).then(user=>{

        var OTP=parseInt(1000 + Math.random() * 9000);
            console.log("OTP",OTP);
      
        if(user){

            smsSender(code+mobile,`Your OTP : ${OTP}`,(response,error)=>{
                console.log(error)
                if(!error){
                    console.log("response",response)
                    user.otp=OTP;
                    user.save(data=>{
                        res.status(200).send({message:"OTP Sent"});
                    })

                }else{
                    res.status(500).send({message:"Something went wrong"});
                }
            });
        }else{
            //Sign up logic ....

            smsSender(code+mobile,`Your OTP : ${OTP}`,(response,error)=>{
                console.log(error)
                console.log(response)
                if(!error){              
                    const user=new User({
                        phone_number:mobile,
                        otp:OTP,
                        name:name,
                        code:code
                    })
                    user.save((error,user)=>{
                        if(user){
                            res.status(200).send({message:"User Registerd"});
                        }else{
                            res.status(500).send({message:"Something went wrong"});        
                        }
                    })
                }else{
                    res.status(500).send({message:"Something went wrong"});
                }
            });
        }
    })
}

module.exports=login;