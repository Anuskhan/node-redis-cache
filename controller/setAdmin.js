const User=require('../model/user');

const setAdmin=(req,res)=>{
    User.findOne({phone_number:req.body.mobile})
        .then(user=>{
            user.role="1"
            user.save((err,user)=>{
                if(user){
                    res.status(200).send({message:"New Admin Created"});
                }else{
                    res.status(400).send({message:"Something went wrong"});
                }
            })
        })
}

module.exports=setAdmin;