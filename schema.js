const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
});

const userSchema = mongoose.model("user",schema);

module.exports = userSchema;