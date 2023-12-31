const passport = require("passport");
const User = require("../models/userSchema")
const LocalStrategy = require("passport-local").Strategy;
require("dotenv").config();
const saltRounds = parseInt(process.env.SALT_ROUNDS);
const bcrypt= require("bcrypt")



passport.use(new LocalStrategy({
    usernameField:'email'
    },
    async function(email , password , done ){
        try{
            const user = await User.findOne({email:email});
            // console.log(user);
            if (!user) {
                console.log("User not found");
                return done(null, false);
              }
            const result = await bcrypt.compare(password, user.password);
            // console.log("result value --->>", result);
            if (!result){
                console.log("Invalid Credentials ");
                return done(null,false);
            }
            else{
                return done (null, user);
            }
        }
        catch(err){
            console.log("error in validting the credentials ");
            return done(err);
        }
    }
));

//  keeping the user id in the cookies f the user 
passport.serializeUser (function(user, done){
    return done(null, user.id);
});

//  remob=ving the user id from the cookies of the user 
passport.deserializeUser (async function (id , done ){
    try{
        const user =await  User.findById(id);
        if(!user){
            return done(null, false);
        }
        return done (null, user);
    }
    catch(err){
        console.log("error in finding the user ");
        return done (err);
    }
});


passport.checkAuthentication= function(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    else{
        res.redirect("/")
    }
};
passport.setAuthenticatedUser= function(req, res, next){
    if (req.isAuthenticated()){
        res.locals.user= req.user;
    }
    next();
}
module.exports= passport;
