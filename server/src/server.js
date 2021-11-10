const express = require("express");
const connect = require("./config/db")
const userCotroller = require("./controllers/user.controller")
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());


app.use("/user",userCotroller)




app.listen(3001,(req,res)=>{
    connect()
    console.log("Server started on port 3001")
})