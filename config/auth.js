
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { SECRETKEY }  = require('../config/config');

 function authenticateToken(req, res, next) { // input should be Bearer [token]
  // Gather the jwt access token from the request header
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) 
  return res.sendStatus(401) // if there isn't any token

  jwt.verify(token, SECRETKEY , async (err, user) => {
    if (err) return res.sendStatus(403)
    // console.log(user);
	let doc = await User.findOne({email:user.data});
	if(doc){
    req.user = {
      email:doc.email,
      id:doc._id
    };
		next()
	}
  })

 }

module.exports = {
	authenticateToken
}