const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); //ajouter package npm install --save  moongoose-unique-validator
const userSchema = mongoose.Schema({  // on définit le datamodel de user
    email : { type: String, required: true, unique: true},
    password : { type: String, required: true},
});
userSchema.plugin(uniqueValidator);
module.exports= mongoose.model('User',userSchema); 