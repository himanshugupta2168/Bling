const express = require("express")
const router= express.Router();
const userController= require("../controllers/userController")
const passport = require("passport")

router.get('/', (req, res)=>{
    res.send("hello from users")
})

router.get('/signup', userController.signup)
router.post("/signup/create", userController.create)



router.get('/login', userController.signin);
router.post("/login/createsession",passport.authenticate(
    'local',
    {
        failureRedirect:"/users/login",
        successRedirect:"/"
    }),

)


module.exports=router;