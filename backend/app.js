//import express module
const express = require('express');

//import body-parser module
const bodyParser = require('body-parser');

//import mongoose module

const mongoose = require('mongoose');

//import bcrypt module
const bcrypt = require('bcrypt');



// mongodb://127.0.0.1:27017=@ de base du serveur mongoDB(Port 27017)
// marsDB=>DB name
mongoose.connect('mongodb://127.0.0.1:27017/restoDB');





//creates express application
const app = express();

// app configuration
//send json response
app.use(bodyParser.json());
//get object from request
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader(

        'Access-Control-Allow-Headers',

        'Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn'

    );

    res.setHeader(

        'Access-Control-Allow-Methods',

        'GET, POST, DELETE, OPTIONS, PATCH, PUT'

    );

    next();

});



//Models Importation

const Chef = require('./models/chef');
const Plat = require('./models/plat');
const User = require('./models/user');





/////plats
//DB Simulation
let platsTab = [{ id: 1, name: 'lasagne', description: 'delicious', price: '30' },
{ id: 2, name: 'couscous', description: 'delicious', price: '40' }
];

//Business logic Get All plats , 
app.get('/api/plats', (req, res) => {
    console.log('here into BL:Get all plats');
    Plat.find().then(
        (docs) => {
            res.json({ platsTab: docs })
        });
});
//Business logic Get plat by id 
app.get('/api/plats/:id', (req, res) => {
    console.log('here into BL:Get plat By ID');
    //recupere l'identifiant du path
    let id = req.params.id;
    Plat.findOne({ _id: id }).then((doc) => {
        res.json({ findedPlat: doc });
    });

});
//Business logic Delete plat by id 
app.delete('/api/plats/:id', (req, res) => {
    console.log('here into BL:delete plat By ID');
    let id = req.params.id;
    Plat.deleteOne({ _id: id }).then((response) => {
        console.log('Here response after delete', response);
        if (response.deletedCount == 1) {
            res.json({ message: 'Deleted with success' });
        } else {
            res.json({ message: 'Error' });
        }
    });

});



//Business logic Add plat by id 
app.post('/api/plats', (req, res) => {
    console.log('here into BL:Add plat ');
    let platObj = new Plat(req.body);
    platObj.save();
    res.json({ msg: 'Added with success' });

});
//Business logic Edit plat by id 
app.put('/api/plats', (req, res) => {
    console.log('here into BL:Edit plat ');
    let newPlat = req.body;
    Plat.updateOne({ _id: newPlat._id }, newPlat).then((response) => {
        console.log('here response after update', response);
        if (response.nModified == 1) {
            res.json({ message: 'Updated with success' });
        } else {
            res.json({ message: 'Error' });

        }
    });
});

//////chefs

//DB Simulation
let chefsTab = [{ id: 1, name: 'Ali', specialty: 'Tunisian', experience: '3years' },
{ id: 2, name: 'Semi', specialty: 'Libanease', experience: '5years' },
{ id: 3, name: 'Saida', specialty: 'Français', experience: '2years' }
];

//Business logic Get All plats 
app.get('/api/chefs', (req, res) => {
    console.log('here into BL:Get all chefs');
    Chef.find().then(
        (docs) => {
            res.json({ chefsTab: docs })
        });
});
//Business logic Get plat by id 
app.get('/api/chefs/:id', (req, res) => {
    console.log('here into BL:Get chef By ID');
    let id = req.params.id;
    Chef.findOne({ _id: id }).then((doc) => {
        res.json({ findedChef: doc });
    });
});
//Business logic Delete plat by id
app.delete('/api/chefs/:id', (req, res) => {
    console.log('here into BL:delete chef By ID');
    let id = req.params.id;
    Chef.deleteOne({ _id: id }).then((response) => {
        console.log('Here response after delete', response);
        if (response.deletedCount == 1) {
            res.json({ message: 'Deleted with success' });
        } else {
            res.json({ message: 'Error' });
        }
    });

});


//Business logic Edit plat by id 
app.put('/api/chefs', (req, res) => {
    console.log('here into BL:Edit chef ');
    let newChef = req.body;
    Chef.updateOne({ _id: newChef._id }, newChef).then((response) => {
        console.log('here response after update', response);
        if (response.nModified == 1) {
            res.json({ message: 'Updated with success' });
        } else {
            res.json({ message: 'Error' });

        }
    });
});


//Business logic Add chef by id 
app.post('/api/chefs', (req, res) => {
    console.log('here into BL:Add chef ');
    let chefObj = new Chef(req.body);
    chefObj.save();
    res.json({ msg: 'Added with success' });


});


//Business Logic:Signup

app.post('/users/signup', (req, res) => {
    console.log('here into BL signup', req.body);
    bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
        req.body.pwd=cryptedPwd;
        console.log('here crypted pwd',cryptedPwd);
        let user=new User(req.body);
        user.save((err,doc)=>{
            if (err) {
              res.json({msg:'Error with signup'}) ; 
            } else {
                res.json({msg:'Added with success'}) ; 

            }
        });
    });
});

//Business Logic Login

app.post('/users/login',(req,res)=>{
         console.log('here into Bl login',req.body);
let user;
User.findOne({email:req.body.email}).then((doc)=>{
    console.log('here resp BE after finding',doc);
    user=doc;
    if(!doc){
        res.json({msg:'please check your email'});
    } else {
        return bcrypt.compare(req.body.pwd,doc.pwd);
    }
}).then(
    (checkPwd)=>{
        console.log('here checking pwd',checkPwd);
        if (!checkPwd) {
            res.json({ msg: 'please check your pwd' });

        } else {
           let userToSend={
            id:user._id,
            fName:user.firstName,
            lName:user.lastName 
           } ;
           res.json({msg:'Welcome',connectedUser:userToSend});
        }
    });
})




//make app exportable
module.exports = app;

