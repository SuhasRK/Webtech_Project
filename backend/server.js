const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
app.use(require('cors')())
dotenv.config(); 

app.use(express.json())

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
 }).then(()=>{
     console.log(`connection to database established`)
 }).catch(err=>{
     console.log(`db error ${err.message}`);
     process.exit(-1)
 })

const QuestionsPageRoute = require("./routes/questions")
app.use("/",QuestionsPageRoute)



const port = process.env.PORT || 80;
app.listen(port , ()=> console.log("Server is running"))

