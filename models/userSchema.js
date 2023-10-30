const mongoose = require("mongoose");

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

module.exports= mongoose.model("User", userSchema);