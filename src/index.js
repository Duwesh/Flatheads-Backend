const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const passport = require("passport");
// const flash = require("connect-flash");
const session = require("express-session");
require("dotenv").config();

const app = express();

app.use(express.json());

// const connect = require("./config/db");

app.listen(process.env.PORT || 4095, async () => {
    try{
      //   await connect();
      console.log(`Listening to port ${process.env.PORT}`);
    }catch(e){
        console.log("err: ", e.message);
    }

});