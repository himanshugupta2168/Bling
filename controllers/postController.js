const Post = require("../models/postSchema");


module.exports.newPost = async (req, res) => {
    try {
        const file = req.files && req.files.image;

        if (file) {
            
        }
        const { content } = req.body;
        const User = req.user;
        console.log(User);
        const savedPost = await Post.create({
            content:content , 
            user:User._id,
        });
        return res.status(200).redirect("back");
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error"); // Handle other errors and return to prevent infinite loop
    }
}
