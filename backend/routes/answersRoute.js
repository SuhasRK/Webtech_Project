const router = require("express").Router();
const Question=require('../models/questions.model')
const Answer=require('../models/answers.model')


router.get("/:id",(req,res)=>{
    Answer.find({question_id:req.params.id})
    .then(result => res.json(result))
    .catch(err => console.log(err))
    
})

router.post("/:id",(req,res)=>{

    if(!req.body.description)
        return res.json({msg:"Description needed"})
   const answer=new Answer({
       username:req.body.username,
       description:req.body.description,
       question_id:req.body.question_id
   })

   answer.save((err,result)=>{
       if(err) throw err;
       else{
           res.json(result)
       }
   })
})

module.exports = router;