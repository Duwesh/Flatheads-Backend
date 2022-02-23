const express = require("express");
require("dotenv").config();

const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
var newToken = (user)=>{
    return (jwt.sign({  user},process.env.JWT_SECRET_KEY));
}
const register = async (req,res) =>{
    try{
        let user = await User.findOne({email:req.body.email}).lean().exec();
        if(user)
        return res.send("User already exists");
      console.log("kriti")
      const Token = newToken(user);
          user = await User.create(req.body);
         
         console.log(user);
          res.send({Token:Token});
          return res.render("users/login.ejs");
        }
        //  return res.render();
        catch(err){
       return res.send(err.message);
    }
}

module.exports = register;