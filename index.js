const express= require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const mongoose= require("mongoose");
const database= require("./config/dbConnect")
const cloudinary= require("./config/CloudinaryConnect")




database.connect();
cloudinary.cloudinaryConnect();



















app.get("/", (req,res)=>{
    res.send("hello welcome to the home page.  it is in under construction<br> See u soon😊😊 ");
})

app.listen(port , (err)=>{
    if (err){console.log(`error in listenning to port `);}
})




