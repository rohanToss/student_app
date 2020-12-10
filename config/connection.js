const mongoose = require('mongoose');
const {CONNECTION_URI, DATABASE} = require('./config');

class Connection {

    url = CONNECTION_URI;
    database = DATABASE;
    
    constructor(){
        mongoose.connect(this.url,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        mongoose.connection.on('open',()=>{
            console.info(`connected to db: ${this.database}`);
        });
        mongoose.connection.on('error',(err)=>{
            console.error(err);
            process.exit(1);
        });
        
    }
}

module.exports = Connection;