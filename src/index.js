const express = require("express");
const  connect  = require("./configs/db.js");
const userController = require("./controllers/user.controller");
const {register,signin} = require("./controllers/auth.controller");
const passport = require("./configs/google_oauth")
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.get("/register",async(req,res)=>{
    return res.render("register.ejs")
});


   
    
app.use("/login",userController);
app.post("/login",register);
app.post("/homepage",signin);


app.set("view engine", "ejs");
app.use(express.static("public"));

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
app.get('/auth/google',
  passport.authenticate('google', { scope:
  	[ 'email', 'profile' ] }
));
 
app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
      
        failureRedirect: '/auth/google/failure'
}),(req,res) =>{
    console.log(req.user)
    res.render("homepage.ejs");
});
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