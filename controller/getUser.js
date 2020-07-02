const User=require('../model/user');

function admin(req,res){
    User.find({})
    .select({otp:0,_id:0,isVarified:0,token:0})
        .then(user=>{
            if(user){
                res.status(200).send(user);
            }else{
                res.status(400).send({message:"Something going wrong"});
            }
        }).catch(err=>{
            res.status(400).send({message:"Internal server error"});
        });
}

module.exports=admin;