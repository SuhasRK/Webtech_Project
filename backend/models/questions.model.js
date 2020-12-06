const mongoose = require("mongoose")


var questionSchema = new mongoose.Schema({
    username:{type:String,required:true},
    title:{type:String, required:true},
    description:{type:String}
},{timestamps:true})


const Question = mongoose.model("Question",questionSchema)


module.exports = Question;