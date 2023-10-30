const mongoose = require("mongoose")
require("dotenv").config();



exports.connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser:true, 
        useUnifiedTopology:true,
    })
    .then(console.log("db connection successfull"))
    .catch(
        (err)=>{
            console.log("error in connecting to the database ", err);
            process.exit(1);
        }
    )
}
