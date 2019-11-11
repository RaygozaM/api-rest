require('./config/config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//parse aplication/ x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//parse formato to aplication/json
app.use(bodyParser.json());

// agroup archive of routes
app.use(require('./routes/index'));

//connection to database
mongoose.connect(process.env.URLDB, 
{ useNewUrlParser: true, 
useUnifiedTopology: true, 
useCreateIndex: true }, 

(err, resp)=>{
    if(err) throw err;

    console.log('Base de datos Online');
});

//port 
app.listen(process.env.PORT, ()=>{
    console.log("escuchando por el puerto: ", process.env.PORT);
});