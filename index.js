const express = require('express');
const app =express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import Routes
const authRoute = require('./routes/auth');

dotenv.config();

//Connection with DB
mongoose.connect(
    process.env.DB_CONNECT,
    
    { useUnifiedTopology: true,useNewUrlParser: true },
    () => console.log('connected to db'));

//Middleware
app.use(express.json());

//Route Middlewares
app.use('/api/user',authRoute);


app.listen(5000,() => console.log("Server Up and Running"));