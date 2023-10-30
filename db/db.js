import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config()

const host = process.env.HOST;
const username=process.env.DB_USER;
const password=process.env.DB_PASS;
const db_name=process.env.DB_NAME

const dbConnect = async (next) => {
    const conn= await mysql.createConnection({
      host: host,
      user: username,
      password: password,
      database: db_name
      
    });
    console.log(` connected on MySql.`);
 };
  export default dbConnect;