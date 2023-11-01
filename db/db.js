import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config()

const host = process.env.HOST;
const username=process.env.DB_USER;
const password=process.env.DB_PASS;
const db_name=process.env.DB_NAME;
const db_port=process.env.DB_PORT


const dbConnect = async (next) => {
  console.log("database:",host,username,password,db_name)
    const pool= await mysql.createPool({
      connectionLimit: 10,
      acquireTimeout: 30000, //30 secs
      host: host,
      user: username,
      password: password,
      database: db_name
      // port: db_port,
      // dialect: 'mysql',
      
    });
    pool.getConnection(function (err, connection) {
      if (err) {
          console.log(err);
      } else {
    console.log("connected..")
          // var query1 = 'select * from table'
          // connection.query(query1, function (error, results, fields) {
          //     res.render('thispage', { user: req.user, results: results });

          // });
          connection.release();
      }
      });
   
 };
  export default dbConnect; 