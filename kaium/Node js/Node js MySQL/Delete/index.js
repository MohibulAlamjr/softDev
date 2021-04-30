var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "softdev"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "DELETE FROM `admin` WHERE id='1'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record Delete");
  });
});

