const User = require("../models/userSchema");

module.exports.signin= async(req, res)=>{
    if (req.isAuthenticated()){
        return res.redirect("/");
    }
    return res.render("login");
}
module.exports.createSession = async (req, res)=>{
    try{
        return res.redirect("/");
    }
    catch{

    }
}
module.exports.signup = async(req, res)=>{
    return res.render("signUp");
}
module.exports.create = async(req, res)=>{
    try{
        const {name, email, password}= req.body;
        const checkEmail=await  User.findOne({email:email});
        if(checkEmail){
            return res.redirect("/users/login");
        }
        const savedUser = await User.create({
            name ,email, password ,
        })
        return  res.redirect("/");

    }
    catch(err){
        console.log("error in Signing up a  a new user ", err);
    }
}