import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser"
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

app.get("/",(req,res)=>{
    res.send("app is UP")
})

// const mongoose= require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/crud', {useNewUrlParser: true, useUnifiedTopology: true}); //for mongodb compass

// mongoose.connect(mongoURI, option);

// for verifying that the connection is done or not
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("!!connection is successfully")
});

app.listen(8000,()=>{
    console.log("server is up at port 8000");
})

app.use("/api",route);