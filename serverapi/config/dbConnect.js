const mongoose = require('mongoose');
const config = require('./config');


const db_url = config.mongo_url;

const db_connection = mongoose.connect(db_url);


db_connection.then((db)=>{
    console.log("Connection With databse succesfull.....");
},(err)=>console.log(err))
.catch((err)=>console.log(err))