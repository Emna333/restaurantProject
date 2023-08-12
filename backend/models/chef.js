//import mongoose module
const mongoose=require('mongoose');

//create schema
const chefSchema=mongoose.Schema({
    name:String,
    experience:Number,
    specialty:String,
});
//affectation d'un nom de modele pour le schema
const chef=mongoose.model('Chef',chefSchema);

//make match exportable
module.exports=chef;