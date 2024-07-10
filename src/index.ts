import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect(process.env.MONGO_URL! || "mongodb://localhost:27017").then(()=>{
    console.log(`connected to mongodb at ${mongoose.connection.host}`);
    
})

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(3000, () => console.log("listening to port 3000.."));
