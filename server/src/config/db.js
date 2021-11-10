const monoogse = require("mongoose")

const connect = () =>{
    console.log("connected to the local database.")
    return monoogse.connect("mongodb://localhost:27017/myapp")
}


module.exports = connect