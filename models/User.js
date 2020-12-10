const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    gender:{
        requird:true,
        type:String,
    },
    dob:{
        required:true,
        type:Date,
    },
    institute:{
        type:String,
        required:true,
    },
    isVerified:{
        required:true,
        type:Boolean,
        default:false
    }
},{timestamps:true});

module.exports = mongoose.model('user',UserSchema);
