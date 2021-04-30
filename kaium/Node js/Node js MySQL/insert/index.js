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
  var sql = "INSERT INTO `admin`(`name`, `bloodgroup`, `email`, `password`) VALUES ('Sweety','A(+)','sweetzxcvbnm@gmail.com','sweet123'),('Sabbir','C(+)','sabbirzxcvbnm@gmail.com','sabbir123'),('abul','D(+)','abulzxcvbnm@gmail.com','abul123')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

