const mongoose= require("mongoose");

const postSchema =new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    postImage:{
        type:String,
    },
    postVideo:{
        type:String,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",

    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }],
    likes:{
        type:Number,
    }

})
module.exports= mongoose.model("Post", postSchema);