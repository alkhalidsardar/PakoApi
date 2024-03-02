//importing dotenv files
require("dotenv").config();
//importing db connection
const connectDB = require("./db/db")
//connecting database


//importing json data
const jsonData = require("./pako.json")
//importing model 
const ApiModel = require("./model/model")


//storing json data in schema format in database
const start = async () => {
    try {
        //make connection
        await connectDB(process.env.MONGODB_URL)
        //delete previous data 
        await ApiModel.deleteMany();
        //push json data with schema in db
        await ApiModel.create(jsonData)
        console.log("success")
    } catch (error) {
        console.log(error)
    }
}

start()