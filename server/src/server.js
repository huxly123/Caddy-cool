const express = require("express");
const connect = require("./config/db")
const userCotroller = require("./controllers/user.controller")
const {register,login} = require("./controllers/auth.controller")
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/register",register)
app.post("/login",login);
app.use("/user",userCotroller)

const remainingController = require("./controllers/remaining.controller");
const takenController = require("./controllers/taken.controller");

app.use("/remaining", remainingController);

app.use("/taken", takenController);

app.get("/", (req, res) => {
   return res.send("hello")
})

const port = process.env.PORT || 8080; 
app.listen(port,(req,res)=>{
    connect();
    console.log(`Server Started on port ${port}`)
})