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
  var sql = "INSERT INTO `admin`( `name`, `bloodgroup`, `Email`, `password`) VALUES ('Mohibul Alam','AB+','mohibulalamjr@gmail.com','Sab12345'),('Mouly','o+','sirajulmunira@gmail.com','Mouly12345'),('Kaium','AB+','kaium@gmail.com','Kaium12345')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});