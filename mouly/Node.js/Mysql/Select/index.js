
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
  var sql = "SELECT `id`, `name`, `bloodgroup` FROM `admin` WHERE id = '1' ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record selected");
  });
});

