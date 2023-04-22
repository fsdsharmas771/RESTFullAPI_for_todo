const mongoose = require('mongoose');
// make connection
// mongoose.connect('mongodb://localhost/EcommerceApi');
mongoose.connect("mongodb+srv://sharmas771:rCelcH9bcc2Q7bpI@cluster0.qryqz76.mongodb.net/taskApi");

// store connection into db
const db = mongoose.connection;
// if error in connecting to database
db.on('error',console.error.bind(console,'Error in connecting to mongoDB'));
// on successfully connected to database
db.once('open',function(){
    console.log('Connected to database:: mongoDB');
})