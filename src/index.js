const express = require("express");
const  connect  = require("./configs/db.js");
const userController = require("./controllers/user.controller");
const Register = require("./controllers/auth.controller");
const loginController = require("./controllers/login.controller")
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users",userController)
app.post("/register",Register);
app.use("/login",loginController);
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(4888,async()=>{
    try{
        await connect();
        console.log("Listening on port 4888")
    }
    catch(e)
    {
        console.log(e.message);
    }
})