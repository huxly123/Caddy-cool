const express = require("express");
const User = require("../models/user.model");
const { body, validationResult } = require('express-validator');
const router = express.Router();



router.get("",async(req,res)=>{
    const data = await User.find({});
    return res.send(data)
    console.log(data)
})


router.post("",
body("name").not().isEmpty().isLength({min:5}).withMessage("Please enter a valid Name."),
body('email').not().isEmpty().custom(value=>{
    return User.find({email:{$eq:value}}).then(user=>{
        if(user){
            return Promise.reject("Email already in use.")
        }
    })
}),
body('password').not().isEmpty().isLength({min:6}).withMessage("Please enter a valid Password."),
async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        let array = []
        errors.array().forEach(e => array.push(e.msg))
        res.json({
            method:req.method,
            status:400,
            errors:array
        })

    }else{
    const data = await User.create(req.body);
    res.send(data);
    }
})

router.get("/:id",async(req,res)=>{
    const data = await User.findById(req.params.id);
    res.send(data);
})

router.get("/:id",async(req,res)=>{
    const data = await User.findByIdAndUpdate(req.params.id,req.body);
    res.send(data);
})

router.get("/:id",async(req,res)=>{
    const data = await User.findByIdAndDelete(req.params.id);
    res.send(data);
})


module.exports = router