const express= require("express")
const router = express.Router();

router.get("/",(req, res)=>{
    res.render('login', {
        // title:"Home Page"
    })
})
router.post("/home", (req, res)=>{
    res.render('navbar')
})

module.exports= router;