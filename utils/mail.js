const nodemailer = require('nodemailer');
const {HOST,USER,PASS} = require('../config/config');
/**
 * CREATE TRANSPORTER SERVICE
 */

 const transporter = nodemailer.createTransport({
     host:HOST,
     auth:{
         user:USER,
         pass:PASS
     },
     secure:false,
     tls:{
        rejectUnauthorized:false
    }
 });


 const mail = function(user){
     const mailOptions = {
        from    : USER,
        to      : user.email,
        subject : 'new registration',
        html    :   `
                    <h1> Hello ${user.name} </h1> 
                    <a href = http://localhost:5000/api/user/${user.id}>Click on this link to verify </a>
                    <br/>
                    <h4>Date of Registration </h4> ${user.date}
                    `
        }

     return new Promise((resolve,reject)=>{
        transporter.sendMail(mailOptions,function(err,info){
            if(err){
                console.log(err.message);
                reject(err);   
            }  
            else{
                resolve(info);
            }
        })
     })
 }


 module.exports = mail;