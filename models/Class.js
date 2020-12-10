const mongoose = require('mongoose');

const ClassSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
    },
    video_url:{
        type:String,
        required:true
    },
    refernce_url:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('class',ClassSchema);