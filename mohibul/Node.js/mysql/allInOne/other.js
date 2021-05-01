var mysql=require('mysql');

var DatabaseConnectionConfig={
    host:"localhost",
    user:"root", 
    password:"",
    database: "softdev"
    
}

var con = mysql.createConnection(DatabaseConnectionConfig);

con.connect(function(error){
    if(error){
        console.log("failed");

    }else{
        console.log("success");
         
         //selectByWhere(con);
         //orderBy(con);
         //dropTable(con);
         limits(con);
        

    }
});


// select data 

function selectByWhere(con){
    var idj ="17";
    var namem ="kaium";
  //var sql = "SELECT * FROM `admin` WHERE id = " + mysql.escape(id);
  //var sql="SELECT * FROM `admin` WHERE name LIKE 'S%'";
  //var sql = "SELECT * FROM `admin` WHERE id = ?" ;
  var sql = "SELECT * FROM `admin`  WHERE name = ? OR id = ?" ;

  con.query(sql,[namem,idj], function (err, result) {
    if (err) throw err;
    console.log(result[4].name);
  });

}


// orderBy 
function  orderBy(con){
    
  
  //var sql = "SELECT * FROM `admin` ORDER BY id" ;
  var sql = "SELECT * FROM `admin` ORDER BY id DESC " ;
  

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

}


// drop 
function  dropTable(con){
  var sql = "DROP TABLE hi" ;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

}

// limits 
function  limits(con){
    //var sql = "SELECT * FROM `admin` LIMIT 3" ;
    //var sql = "SELECT * FROM `admin` ORDER BY id DESC LIMIT 3" ;
    //var sql = "SELECT * FROM `admin` LIMIT 5 OFFSET 3" ;
    var sql = "SELECT * FROM `admin` LIMIT 5, 3" ;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  
  }
