const router = require("express").Router();
const User=require('../models/signup.model')

router.get('/:id',(req,res)=>{

    User.findOne({_id:req.params.id})
    .then(result => res.json(result.username))
    .catch(err => res.json(err))

})


module.exports=router;