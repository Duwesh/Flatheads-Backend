require("dotenv").config();
const passport = require("passport");
const User = require("../models/user.model")
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const { v4: uuidv4 } = require('uuid');

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4012/auth/google/callback",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {

    let user = await User.findOne({email:"profile?.email"}).lean().exec();
    if(!user)
    {
        user = await User.create({
            "email":profile?.email,
            "password":uuidv4(),
            "role":["customer"]
        })
    }
    console.log({"email":profile?.email})
    console.log(uuidv4())
    console.log(user);
      return done(null, user);
    
  }
));
module.exports = passport;