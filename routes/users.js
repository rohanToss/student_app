const router = require('express').Router();
const user = require('../controllers/users');
const auth = require('../config/auth');

/**
 * REGISTER A NEW USER
 */
router.post('/register',user.register);
/**
 * VERIFY THE REGISTERED USE
 */
router.get('/:id',user.verify); // verify the user registered

/**
 * LOGIN ROUTE
 */
router.post('/login',user.login);

/**
 * UPDATE PASSWORD
 */
router.post('/password-update',auth.authenticateToken,user.updatePassword);

/**
 * FORGOT PASSWORD
 */
 router.post('/password-forgot',user.forgotPassword);

module.exports = router;