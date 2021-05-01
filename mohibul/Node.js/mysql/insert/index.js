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
  var sql = "INSERT INTO `admin`(`name`, `bloodgroup`, `email`, `password`) VALUES ('mofiz','A(+)','sswty@gmail.com','sss123'),('Serajum munira','O(+)','mouly@gmail.com','mmm123'),('kaium','B(+)','kaium@gmail.com','kkk123')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

