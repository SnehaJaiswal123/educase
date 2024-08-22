const mysql = require('mysql2');
require('dotenv').config()

const connection = mysql.createConnection({
  host:process.env.HOST,
  user:process.env.USER,
  database:process.env.DB_NAME,
  password:process.env.PASS
});

module.exports=connection

