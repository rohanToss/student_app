const router = require('express').Router();
const user = require('../controllers/users');

/**
 * REGISTER A NEW USER
 */
router.post('/register',user.register);
/**
 * VERIFY THE REGISTERED USER
 */
router.get('/:id',user.verify);

/**
 * LOGIN ROUTE
 */
router.post('/login',user.login);



module.exports = router;