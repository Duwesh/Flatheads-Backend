const express = require("express");
// const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

app.set("view Engine", "ejs");

app.use(express.static("public"));

// all page redirection
//home pager
app.get("", async (req, res) => {
  return res.render("home.ejs");
});

// //cart page
// app.get("/cart", async (req, res) => {
//   return res.render("cart.ejs");
// });

// //login page
// app.get("/login", async (req, res) => {
//   return res.render("login.ejs");
// });

// //register page
// app.get("/register", async (req, res) => {
//   return res.render("register.ejs");
// });

//checkout page
app.get("/checkout", async (req, res) => {
  return res.render("checkout.ejs");
});

//thankyou page
app.get("/thankyou", async (req, res) => {
  return res.render("thankyou.ejs");
});

const connect = require("./config/db");

app.listen(process.env.PORT || 4095, async () => {
  try {
    await connect();
    console.log(`Listening to port ${process.env.PORT}`);
  } catch (e) {
    console.log("err: ", e.message);
  }
});
