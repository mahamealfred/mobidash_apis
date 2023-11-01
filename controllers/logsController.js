import dbConnect from "../db/db.js";
import { createError } from "../utils/error.js";



export const deposits=async(req,res,next)=>{
 
    try {
        const con=dbConnect;
        const q="SELECT * FROM deposit_logs ORDER BY id DESC LIMIT 5";
        con.query(q, (err, data) => {
            if (err) {
              console.log(err);
              return res.json(err);
            }
            return res.json(data);
        }); 
    } catch (err) {
        next(err)
    }
    }
   