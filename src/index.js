const express = require("express");
const connect = require("./config/db");
require("dotenv").config();
const productsContrller = require("./controllers/product.controller");

const Port1 = process.env.Port || 1234;
const app = express();
app.use(express.json());
app.use("/products", productsContrller);

// app.set("views", "views");
app.set("view engine", "ejs");


app.get("", (req, res)=>{
  return res.render("product")
})

app.listen(Port1, async (req, res) => {
  try {
   await connect();
    console.log(`Connected to the ${Port1}`);
  } catch (error) {
    console.log(error.message);
  }
});
