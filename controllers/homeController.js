const Post =require("../models/postSchema");
const User = require("../models/userSchema");
const Comment =require("../models/commentSchema") ;


module.exports.home = async(req, res)=>{
    try{
        const Posts = await Post.find({}).populate({
            path:"user", 
            select:"-password -email -posts[], -createdAt -updatedAt -_v" 
        }).exec();
        return res.status(200).render('home', {
        Posts:Posts,
        });
    }
    catch{

    }
}