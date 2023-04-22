const express = require('express');
const app = express();
const port = 8000;
const db = require('./confg/mongoose');
const bodyParser = require('body-parser');
const passportJWT = require('./confg/passport-jwt-strategy');
// middleware for form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// tell app to use index.js file of route folder
app.use('/',require('./routes/api/v1/index'));

app.listen(port,function(error){
    if(error){
        console.log(`Error in running server: ${error}`);
    }
    console.log(`Yepp!! Server is running on port: ${port}`);
});
