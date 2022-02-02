const express = require("express");
const port = 7000 ;
const app = express();
const db = require('./config/mongoose')
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');



// adding view port and its path
app.set('view engine' , 'ejs');
app.set('/views', './views');

// adding the routes
app.use('/', require('./routes'));


// connecting to the server
app.listen(port , (err)=>{

    if(err){console.log(`Error in connecting server : ${err}`); return;}
    console.log(`Server is connected on https://localhost:${port}`);
})