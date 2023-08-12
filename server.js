//import app from backend/app
const app =require ('./backend/app');
//server is listening on port 3001
//http://localhost:3001

app.listen(3001 , () => {
    console.log('express server is listening on port 3001...')
    //message pour verifier l serveur yemchi
})