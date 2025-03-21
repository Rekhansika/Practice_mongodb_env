const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const userSchema = require("./schema")

const app = express();

app.post('/rekha',async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        if(!email || !name || !password){
            res.status(400).respond({msg:"All fields are required"});
        }
        const existingUser = await userSchema.findOne({email});
        if(existingUser){
            res.status(500).send({msg:"user already exists"});
        }

        const data = new userSchema({name,email,password});
        await data.save();
        res.status(200).send({msg:"User created successfullyy.."});

        
    } catch (error) {
        res.status(500).send({msg:"Something went wrong"})
    }
})

app.get('/ping',(req,res)=>{
    res.status(200).send({msg:"ping-pong"});
    
})

app.listen(8000,async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)

        console.log("Server connected successfully")
    } catch (error) {
        console.log("Error");
    }
})