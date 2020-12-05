const router = require("express").Router();
const config = require('config');
const jwt = require('jsonwebtoken');
const User=require('../models/signup.model')

router.post('/',(req,res)=>{

    //console.log(req.body)
    const user={
        username:req.body.username,
        password:req.body.password
    }

    if(!user.username || !user.password){
        return res.status(200).json({msg:"Enter all fields"})
    }
//Checking for existing user

    User.findOne({username : user.username})
    .then(result=>{
        if(!result) return res.status(200).json({msg:"User Doesn't Exist"});
        else{

            if(result.password === user.password){
                jwt.sign(
                {id:result.id},
                config.get('jwtSecret'),
                (err,token)=>{
                    if(err) throw err;
        
                    res.status(200).json({
                        msg:"Logged in",
                        token,
                        logged_user:{
                            id:result.id,
                            username:result.username
                        }
                    })
                }
                )
            }

            else
                res.status(200).json({msg:"Password doesn't match with the username"})
            
        }

    })



})


module.exports=router;