const mongoose = require("mongoose")


var userSchema = new mongoose.Schema({
    username:{type:String, required:true},
    phone:{type:Number}
},{timestamps:true})


const User = mongoose.model("User",userSchema)


module.exports = User;