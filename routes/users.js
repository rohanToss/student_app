const router = require('express').Router();
const user = require('../controllers/users');


router.post('/register',user.register);
router.get('/:id',user.verify);


module.exports = router;