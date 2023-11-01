import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/index.js"
import dbConnect from "./db/db.js";
const app=express();
dotenv.config()

// const host = process.env.HOST;
// const username=process.env.DB_USER;
// const password=process.env.DB_PASS;
// const db_name=process.env.DB_NAME
 

//   console.log(` connected on MySql.`);
// };

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
    dbConnect
    console.log("Connected to Backend.");
});
