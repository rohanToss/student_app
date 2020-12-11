require('dotenv').config();

module.exports = {
    PORT : process.env.PORT,
    CONNECTION_URI : process.env.CONNECTION_URI,
    DATABASE : process.env.DATABASE,
    HOST: process.env.HOST,
    USER : process.env.USER,
    PASS : process.env.PASSWORD,
    SECRETKEY : process.env.PRIVATE_KEY
}