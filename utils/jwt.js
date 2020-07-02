const jwt=require('jsonwebtoken')


const jwtGenrate=(user,callback)=>{
    console.log("jwt",user)
    jwt.sign(JSON.stringify(user), process.env.JWT_SECRET, function(err, token) {
        if(err){
            callback(err,null)
        }else{
            callback(null,token)
        }
    });
}

const jwtDecode=(user,callback)=>{
    
}

module.exports={jwtGenrate}