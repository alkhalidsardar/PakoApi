const mongoose = require("mongoose")

//projects schema
const projectSchema = new mongoose.Schema({
    title: String,
    imgUrl: String,
    source: String,
    livelink: String,
})
//insta schema
const instaSchema = new mongoose.Schema({
    title: String,
    imgUrl: String,
    source: String,
    livelink: String,
})

//overall schema
const schema = new mongoose.Schema({
    projects: [projectSchema],
    insta: [instaSchema],
})

//creating model
module.exports = mongoose.model("ApiModel ",schema)