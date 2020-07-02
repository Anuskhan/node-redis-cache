
function adminAuth(req,res,next){
    if(req.user.role==="1"||req.user.role==="2"){
        next();
    }else{
        res.status(404).send({message:"Not Found"})
    }
}

module.exports=adminAuth;