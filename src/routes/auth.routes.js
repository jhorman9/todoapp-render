const {userLogin} = require('../controllers/auth.controller');
const {Router} = require('express');

const router = Router();

router.post('/auth/login', userLogin); //Para realizar el login

module.exports = router;