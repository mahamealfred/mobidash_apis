import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/index.js"
//import dbConnect from "./db/db.js";
const app=express();
dotenv.config()

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors({credentials: true, origin: 'http://127.0.0.1:3000'}));
app.enable('trust proxy');
app.use(routes)

app.use((err,req,res,next)=>{
  const errorStatus=err.status || 500;
  const errorMessage=err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    error:{
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack
    }
  })
})
app.listen(8000,()=>{
    //dbConnect
    console.log("Connected to Backend.");
});
