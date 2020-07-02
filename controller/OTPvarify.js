const User=require('../model/user');
const {jwtGenrate}=require('../utils/jwt')

const OTPvarify=(req,res)=>{
    const {mobile,otp}=req.body;
    User.findOne({phone_number:mobile})
    .select({token:0})
    .then(user=>{
        console.log(user)
        if(user){
            if(user.otp===otp){
                //Proceed User
               // res.status(200).send({message:"Correct OTP"});

                //Genrate Token...
                jwtGenrate(user,(error,token)=>{
                    user.token=token;
                    user.isVarified=true;
                    user.save((err,user)=>{
                        if(err){
                            console.log(err);
                            res.status(500).send({message:"Something went wrong"});
                        }else{
                            console.log(user);
                            res.status(200).send({message:"success",token:token,v:user.role});
                        }
                    })
                })

            }else{
                res.status(400).send({message:"Wrong OTP"});
            }
        }else{
            res.status(400).send({message:"User not Exist"});
        }
    })
}

module.exports=OTPvarify;