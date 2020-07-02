const bcrypt=require('bcryptjs');

const compare=(password,hash,callback)=>{
    console.log("Hash",hash)
    bcrypt.compare(password, hash, function(err, res) {
        // res === true
        console.log("Compared",res)
        callback(res)
    });
}

module.exports=compare;