const express = require("express")
const router = express.Router();
const PostController = require("../controllers/postController")
router.post("/create",PostController.newPost)


module.exports= router;
