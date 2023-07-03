import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: "containers-us-west-123.railway.app",
  user: "root",
  database: "railway",
  password: "3QmA18nKavKXiPOkBnZZ",
  port: "6350",
});

export { connection };
