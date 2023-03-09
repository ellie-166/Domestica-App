var mysql = require('mysql2')

var con = mysql.createConnection({
  host:process.env.DB_HOST,
  database:process.env.MYSQL_DB,
  user: process.env.DB_USER,
  password:  process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

con.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log("Connected!")
});


module.exports = con;