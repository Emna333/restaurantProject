//import mongoose module
const mongoose = require('mongoose');

//create schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    pwd: String,

});
//affectation d'un nom de modele pour le schema
const user = mongoose.model('User', userSchema);

//make match exportable
module.exports = user;