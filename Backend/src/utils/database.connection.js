const mongoose = require("mongoose");
require('dotenv').config();

const DB_connect = async () => {
    const URL = process.env.DB_CONNECTION;

    mongoose.connect(URL).then(() => {
        console.log("MongoDB Connection success!");
    }).catch((error)=>{
        console.log(`${error}`)
    });

 }

module.exports = DB_connect;