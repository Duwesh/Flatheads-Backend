const express = require("express");
const  connect  = require("./configs/db.js");
const userController = require("./controllers/user.controller");
const {register,signin} = require("./controllers/auth.controller");

const app = express();
const bodyParser = require("body-parser")
const passport = require("./configs/google.auth")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/register",userController);
app.post("/login",register);
app.post("/landing_page",signin)

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get('/auth/google',
  passport.authenticate('google', { scope:
  	[ 'email', 'profile' ] }
));
 
app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));
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