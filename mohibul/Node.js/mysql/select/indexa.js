var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "softDev"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
//   var sql = "SELECT * FROM `admin` WHERE id='3'";
var sql = "SELECT  `name` FROM `admin` WHERE id='4'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

