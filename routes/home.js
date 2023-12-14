const express= require("express")
const router = express.Router();
const userRoutes= require("./userRoutes");
const homeController= require("../controllers/homeController")

router.get("/",homeController.home);
router.use('/users', require("./userRoutes"))
router.use('/posts', require('./postRoute'))
router.use("/comments", require("./commentRoute"))
router.use("/like", require("./likeRoute"))
module.exports= router;