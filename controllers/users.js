const User = require('../models/User');
const bcrypt = require('bcrypt');
const mail = require('../utils/mail');

const register = async function(req,res){
    try{
        /**
         * CHECK IF THE USER EXISTS
         */
        let exists = await User.findOne({email:req.body.email});
        if(exists){
            throw new Error('User Registered');
        }else{

            let dob = new Date(req.body.dob);
            /**
             * HASHING PASSWORD
             */
            let hashedPassword = await bcrypt.hash(req.body.password,10);
            
            /**
             * NEW USER OBJECT
             */
            const user = new User({
               name:req.body.name,
               email:req.body.email,
               password:hashedPassword,
               gender:req.body.gender,
               dob:dob,
               institute:req.body.institute 
            })
            /**
             * SAVE NEW USER IN THE DATABASE
             */

            let savedUser = await user.save();

            /**
             * SEND MAIL 
             */
            await mail({id:savedUser._id,email:savedUser.email,name:savedUser.name,date:savedUser.createdAt})

            /**
             * SEND RESPONSE
             */
            res.json({
                error:false,
                message:'check your Inbox',
                user: {
                    name:savedUser.name,
                    email:savedUser.email,
                    registerDate:savedUser.createdAt
                }
            })
        }

    }catch(err){
        res.status(400).json({
            error:true,
            message:err.message
        })
    }
}


/**
 * VERIFY THE REGISTERED USER
 */

const verify = async function(req,res){
    let id = req.params.id;
    try{
            let user = await User.findOne({_id:id});
            // console.log(user);
            let updatedUser = await User.findOneAndUpdate({email:user.email},{$set:{isVerified:true}},{new:true});
            // console.log(updatedUser);
            res.json({
                message:"user verified"
            })
    }catch(err){
        res.json({
            error:true,
            message:err.message
        })
    }
}





module.exports = {
    register,
    verify
}