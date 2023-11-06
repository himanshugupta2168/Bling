const express= require("express")
const router = express.Router();
const userRoutes= require("./userRoutes")


router.get("/",(req, res)=>{
    res.render('home', {
        // title:"Home Page"
    })
});
router.use('/users', require("./userRoutes"))
module.exports= router;