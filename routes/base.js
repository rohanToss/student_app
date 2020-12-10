const router = require('express').Router();
const users = require('./users');

/**
 * Set up the users Route
 */
 router.use('/user',users);

module.exports = router;