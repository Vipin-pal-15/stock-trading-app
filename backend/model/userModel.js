const {model, default: mongoose} = require("mongoose");
// const Schema=model.Schema;

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});
module.exports.userRegister=mongoose.model("UserData",userSchema)