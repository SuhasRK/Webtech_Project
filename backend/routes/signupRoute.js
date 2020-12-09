const router = require("express").Router();
const config = require('config');
const jwt = require('jsonwebtoken');
const User=require('../models/signup.model')

router.post('/',(req,res)=>{

    
    const user=new User({
        username:req.body.username,
        password:req.body.password
    })

    if(!req.body.username || !req.body.password){
        return res.status(200).json({msg:"Enter all fields"})
    }
//Checking for existing user

    User.findOne({username : req.body.username})
    .then(result=>{
        if(result) return res.status(200).json({msg:'User already exists'});
        else{
            user.save((err,user)=>{
                if(err) throw err;
                else{
                    jwt.sign(
                        {id:user.id},
                        config.get('jwtSecret'),
                        (err,token)=>{
                            if(err) throw err;
        
                            res.status(200).json({
                                msg:"User Added",
                                token:token,
                                user:{
                                    id:user.id,
                                    username:user.username
                                }
                            })
                        }
                    )
                }
            })
        }
        
    })


})


module.exports=router;