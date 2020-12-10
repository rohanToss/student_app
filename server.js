const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const {PORT} = require('./config/config');
const Connection = require('./config/connection');

/**
 * Setting up the middlewares
 */
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
/**
 * DATABASE CONNECTION
 */
 let connect = new Connection();
/**
 * Setting up the base route
 */
app.use('/api',require('./routes/base'));

/* start the SERVER */
app.listen(PORT,()=>console.log(`listening on http://localhost:${PORT}`));
