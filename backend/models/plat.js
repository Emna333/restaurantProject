//import mongoose module
const mongoose=require('mongoose');

//create schema
const platSchema=mongoose.Schema({
    name:String,
    price:Number,
    description:String,
});
//affectation d'un nom de modele pour le schema
const plat=mongoose.model('Plat',platSchema);

//make match exportable
module.exports=plat;