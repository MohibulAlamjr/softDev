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
  var sql = "UPDATE `admin` SET  `id`='1',`name`='kaium sorif',`bloodgroup`='A(+)' WHERE id='2'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record update");
  });
});
