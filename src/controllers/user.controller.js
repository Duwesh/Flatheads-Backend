const express = require("express");
const router = express.Router();
const User = require("../models/user.model")


router.get("",async(req,res)=>{


   
    // console.log(user)
        return res.render("register.ejs"); 
    
  
   
})
module.exports = router;