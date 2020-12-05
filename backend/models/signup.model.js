const mongoose = require("mongoose")


var signupSchema = new mongoose.Schema({
    username:{type:String,unique: true, required:true},
    password:{type:String,required:true}
},{timestamps:true})


const User = mongoose.model("user",signupSchema)


module.exports = User;