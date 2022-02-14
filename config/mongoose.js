const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost/Employee_Review_System_DB';
mongoose.connect( dbUrl , {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console , "Error Connecting to the Database"));

db.once('open' , function(){
    console.log('Connected to the Database :: MongoDB...!');
});

module.exports = db ;

