const monoogse = require("mongoose")

const connect = () =>{
    console.log("connected to the  database.")
    return monoogse.connect(
      "mongodb+srv://caddycool:caddycool@cluster0.xarvi.mongodb.net/caddycool?retryWrites=true&w=majority"
    );
}


module.exports = connect