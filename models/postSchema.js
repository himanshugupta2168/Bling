const mongoose= require("mongoose");

const postSchema =new mongoose.Schema({
    content:{

    },
    user:{

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