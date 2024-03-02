//IMPORT ENV VARAILBLES
require("dotenv").config();

//create express instance
const express = require('express');

const app = express()

const connectDb = require("./db/db")


//import new route
const router = require('./routes/productRoute');
//use new route
app.use("/", router)

const PORT = process.env.PORT || 5000
//listening 
const start = async () => {
 try {
   //connect database
   await connectDb(process.env.MONGODB_URL)
   //listen for request
    app.listen(PORT , ()=>[
        console.log("server is listening")
    ])
 } catch (error) {
    console.log(error)
 }
}

start();