const mongoose = require('mongoose');
const TaskSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('task',TaskSchema);