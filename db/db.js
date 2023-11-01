import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config()

const host = process.env.HOST;
const username=process.env.DB_USER;
const password=process.env.DB_PASS;
const db_name=process.env.DB_NAME;
const db_port=process.env.DB_PORT


// const dbConnect = async (next) => {

    const dbConnect=  mysql.createPool({
      connectionLimit: 10,
      acquireTimeout: 30000, //30 secs
      host: host,
      user: username,
      password: password,
      database: db_name
      // port: db_port,
      // dialect: 'mysql',
      
    });
    dbConnect.getConnection(function (err, connection) {
      if (err) {
          console.log(err);
      } else {
        
        console.log("connected to Database.")
        connection.release();
        return connection;
   
      }
      });
   
//  };
  export default dbConnect; 