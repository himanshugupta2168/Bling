const mongoose = require("mongoose");
const saltRounds = parseInt(process.env.SALT_ROUNDS);
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    name :{
        type:   String,
        requires:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    profileImage:{
        type:String,

    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    }],

})
userSchema.pre('save', function(next) {
    const user = this;
  
    // Only hash the password if it has been modified or is new
    if (!user.isModified('password')) return next();
  
    // Generate a salt
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) return next(err);
  
      // Hash the password with the generated salt
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
  
        user.password = hash;
        next();
      });
    });
  });
module.exports= mongoose.model("User", userSchema);