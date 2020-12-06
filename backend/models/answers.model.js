const mongoose = require("mongoose")


var answerSchema = new mongoose.Schema({
    username:{type:String,required:true},
    description:{type:String, required:true},
    question_id:{type:String,required:true}
},{timestamps:true})


const Answer = mongoose.model("Answer",answerSchema)


module.exports = Answer;