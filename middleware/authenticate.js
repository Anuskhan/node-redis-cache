const User=require('../model/user');

module.exports=(req,res,callback)=>{
    const {token} = req.headers;
    User.findOne({token:token})
        .populate("profile")
        .select({_id:0,password:0,token:0})
        .then(user=>{
            if(user){
                req=Object.assign(req,{user:user});
                callback(true)
            }else{
                callback(false)
            }
        })
}