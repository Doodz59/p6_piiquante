const express = require('express');
const router = express.Router();
const userCtrl= require('../controllers/User');
const { userValidationRules, validate } = require("../middleware/validation-input");
// on définit les différentes  routes pour sauce
router.post('/signup',userValidationRules(), validate, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;