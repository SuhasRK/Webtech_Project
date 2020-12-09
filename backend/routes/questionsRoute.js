const router = require("express").Router();

const Question = require("../models/questions.model")


router.get("/",(req,res)=>{
    Question.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json("Error: "+err))
})

router.get("/asked/:username",(req,res)=>{
    Question.find({username:req.params.username})
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json("Error: "+err))
})

router.get("/:id",(req,res)=>{
    Question.findById(req.params.id)
    .then(question => res.json(question))
    .catch(err => res.status(400).json("Error: "+err))
})

router.post("/:id/update",(req,res)=>{
    Question.findById(req.params.id)
    .then(question=>{
        question.title = req.body.title? req.body.title:question.title;
        question.description = req.body.description? req.body.description:question.description;

        question.save()
        .then(result=> res.json(result))
        .catch(err=>res.json("Error: "+err))
    })
    .catch(error=>res.json("Error: "+error))
})

router.post("/add",(req,res) => {
    const newQuestion = new Question({
        username:req.body.username,
        title:req.body.title,
        description:req.body.description
    })

    newQuestion.save((error,result) => {
        if(error) throw error
        else{
            console.log(result);
        }
    })
    console.log("Saved")
})


module.exports = router;