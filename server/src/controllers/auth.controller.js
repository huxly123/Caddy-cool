const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user.model");


let user;
const register = async(req,res) =>{
    try{
        const errorA= [];
        if(!req.body.email.includes("@")){
            errorA.push("Please enter a valid email.")
        }
        if(req.body.name.length<3){
            errorA.push("Username should be more than 3 charecters.")
        }
        if(errorA.length!==0){
            return res.send({status:422,error:errorA})
        }
        user = await User.findOne({email:req.body.email});
        if(user){
            return res.send({status:400,message:"email is already taken."})
        }
        user = await User.create(req.body);
        res.status(200).send({message:"User registered successfuly."})
}
    catch(err){
        if(err){
            console.log(err);
        }
        res.status(500).send("Sorry for the incovinience");
    }
}

const login = async(req,res)=>{
    try{
    user = await User.findOne({email:req.body.email});
    if(!user) return res.send({status:400,message:"Please check your email or passsword.",headers:"none"})

    let match = user.checkPassword(req.body.password);
    if(!match) return res.send({status:400,message:"Please check the email and password",headers:"none"})

    res.send({status:200,message:"Log In Successful.",name:user.name});
    }catch(err){
        res.send({status:500,message:"Sorry for the inconvinience plaese try again later"})
    }
}


module.exports = {register,login};