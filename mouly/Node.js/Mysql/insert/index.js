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
  var sql = "INSERT INTO `admin`( `name`, `bloodgroup`, `email`, `password`) VALUES ('Mouly','O+','serajulmunira@gmail.com','mouly123'),('sweety','A++','sweety@gmail.com','sweety123'),('kaium','B+','kaium@gmail.com','kaium123')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

