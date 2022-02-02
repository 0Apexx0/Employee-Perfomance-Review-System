const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Employee_Review_System_DB');

const db = mongoose.connection;

db.on('error', console.error.bind(console , "Error Connecting to the Database"));

db.once('open' , function(){
    console.log('Connected to the Database :: MongoDB...!');
});

module.exports = db ;

