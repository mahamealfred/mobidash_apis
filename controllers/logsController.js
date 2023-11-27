//import dbConnect from "../db/db.js";
import { createError } from "../utils/error.js";
import axios from "axios";

// const con=dbConnect;
const con=0
export const deposits=async(req,res,next)=>{
    try {
        const q="SELECT * FROM deposit_logs ORDER BY id DESC LIMIT";
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
          const q="SELECT * FROM account_creation_logs ORDER BY id DESC LIMIT";
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

      //All GTBbank Accounts

      export const allGTbankTransactions=async(req,res,next)=>{
        const authheader = req.headers.authorization;
        const auth = new Buffer.from(authheader.split(' ')[1],
        'base64').toString().split(':');
        const user = auth[0];
        const pass = auth[1];
        const auths=user+pass

        const  headers= { 
          'Content-Type': 'application/json', 
          'Authorization': authheader
        }
        let config = {
          method: 'GET',
          maxBodyLength: Infinity,
          url: 'https://core.mobicash.rw/mobicore/api/transactions?authorizationStatuses=pending',
          headers: headers
          
        };
        
        await axios.request(config)
        .then((response) => {
         if(response.data){
          return res.status(200).json({
            statusCode: 200,
            status:"SUCCESS",
            data:response.data
          }); 
        }
       
        })
        .catch((err) => {
          next(err)
        })
      }
     