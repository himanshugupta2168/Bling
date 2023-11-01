const passport = require("passport");
const User = require("../models/userSchema")
const LocalStrategy = require("passport-local").Strategy;



passport.use(new LocalStrategy({
    usernameField:'email'
    },
    async function(email , password , done ){
        try{
            const user = await User.findOne({email:email});
            if (!user|| user.password!= password){
                console.log("INvalid Credentials ");
                return done(null, false);
            }
            return done (null, user );
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
        const user = User.findById(id);
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
