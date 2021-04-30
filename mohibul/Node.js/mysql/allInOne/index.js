// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "softDev"
// });

// var con = mysql.createConnection(DatabaseConnectionConfig);

// con.connect(function(error){
//     if(error){
//         console.log("failed");

//     }else{
//         insertData(con);
//         // deleteData(con);
//         // updateData(con);
//         // multipleInsterData(con);
//         // selecData(con);
//         // allSelect(con);
//     }
// });




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
  var sql = "DELETE FROM `admin` WHERE id='2'";
  con.query(sql, function (err, result) {
    if (err){ throw err
    }else{
        //insertData(con);
         //deleteData(con);
        // updateData(con);
        // multipleInsterData(con);
        // selecData(con);
         allSelect(con); 
    }    
  });
});


// insert

function insertData(con){
 var sql = "INSERT INTO `admin`(`name`, `bloodgroup`, `email`, `password`) VALUES ('Sweety Aktar','A(+)','sswty@gmail.com','sss123')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
};


// delete  

function deleteData(con){
    var sql = "DELETE FROM `admin` WHERE id='3'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record deleted");
    });
}


// update 


function  updateData(con){

    var sql = "UPDATE `admin` SET `name`='mouly' WHERE id='5'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record updated");
  });
}

// select 
function selecData(con){
    var sql = "SELECT  `name` FROM `admin` WHERE id='4'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
}

// multiple insert 
function multipleInsterData(con){
    var sql = "INSERT INTO `admin`(`name`, `bloodgroup`, `email`, `password`) VALUES ('Sweety Aktar','A(+)','sswty@gmail.com','sss123'),('Serajum munira','O(+)','mouly@gmail.com','mmm123'),('kaium','B(+)','kaium@gmail.com','kkk123')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

    
}

//allselect
function  allSelect(con){
    var sql = "SELECT * FROM `admin` WHERE id='5'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });

}