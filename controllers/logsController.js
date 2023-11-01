import dbConnect from "../db/db.js";
import { createError } from "../utils/error.js";


const con=dbConnect;

export const deposits=async(req,res,next)=>{
    try {
        const q="SELECT * FROM deposit_logs ORDER BY id DESC LIMIT 10";
        con.query(q, (err, data) => {
            if (err) {
              return res.json(err);
            }
            return res.status(200).json({
              statusCode:200,
              status:"Success",
              data
            });
        }); 
    } catch (err) {
        next(err)
    }
    }
    export const createdAccountLogs=async(req,res,next)=>{
      try {
          const q="SELECT * FROM account_creation_logs ORDER BY id DESC LIMIT 10";
          con.query(q, (err, data) => {
              if (err) {
                return res.json(err);
              }
              return res.status(200).json({
                statusCode:200,
                status:"Success",
                data
              });
          }); 
      } catch (err) {
          next(err)
      }
      }
     