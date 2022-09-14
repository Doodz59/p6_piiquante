const express = require('express');
const app = express(); //npm install --save express-validator
app.use(express.json());
const { body, validationResult } = require('express-validator');

  const userValidationRules = () => {
    return [body("email").isEmail(), body("password").isLength({ min: 3 })];
  };
  
  // Error handeling
  const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const extractedErrors = [];
    errors.array().map((err) =>
      extractedErrors.push({
        [err.param]: "Le mot de passe doit faire au moins 6 caractères",
      })
    );
    return res.status(422).json({
      errors: extractedErrors,
    });
  };
  
  module.exports = {
    userValidationRules,
    validate,
  };