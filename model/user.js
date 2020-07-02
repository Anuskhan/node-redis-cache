const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Profile=require('./profile')

const User=new Schema({
    phone_number:{
        type:String,
    },
    token:{
        type:String
    },
    isVarified:{
        type:Boolean,   
        default:false
    },
    otp:{
        type:String
    },
    name:{
        type:String
    }, 
    role:{
        type:String,
        default:"0"
    },
    code:{
        type:String,
    },
    age:{
        type:Number,
        default:37
    },
    gender:{
        type:String,
        default:"female"
    },
    smoking:{
        type:String,
        default:"Y"
    },
    married:{
        type:String,
        default:"N"
    },
    child:{
        type:Number,
        default:1
    },
    country:{
        type:String,
        default:"IN"
    },
    state:{
        type:String,
        default:"IN"
    },
    occ:{
        type:String,
        default:"39-3031.00"
    },
    annual_income:{
        type:Number,
        default:0
    },
    loans:{
        type:Number,
        default:33000
    },
    l_cover:{
        type:Number,
        default:40000
    },
    h_cover:{
        type:Number,
        default:40000
    },
    ci_cover:{
        type:Number,
        default:0
    },
    d_cover:{
        type:Number,
        default:49000
    },
    f_cover:{
        type:Number,
        default:0
    }
});

module.exports=mongoose.model('user',User);