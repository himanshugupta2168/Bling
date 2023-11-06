const express= require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const mongoose= require("mongoose");
const database= require("./config/dbConnect")
const cloudinary= require("./config/CloudinaryConnect");
const passport = require("passport");
const passportLocal = require("./config/passport")
const mongoStore = require("connect-mongo");
const cookieParser = require("cookie-parser")
const expressSession =require("express-session")
const flash = require("connect-flash")

app.set('view engine', 'ejs');
app.set('views', "./Views");

app.use (express.urlencoded());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(__dirname+"/Assets"))
app.use(expressSession({
    name:"Bling",
    secret:process.env.SESSION_SECRET,
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*10)
    },
    store:mongoStore.create({
        mongoUrl:process.env.MONGODB_URL,
        autoRemove:'disabled',
    },
    (err)=>{
        console.log(err);
    }
    )
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);




database.connect();
cloudinary.cloudinaryConnect();



app.use("/", require("./routes/home"))

app.listen(port , (err)=>{
    if (err){console.log(`error in listenning to port `);}
})




