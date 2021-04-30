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
         //Insert();
         Delete();
        // update();
        // select();
        // selectall()
        

    }
});


// inserting data 

function Insert(){
  var sql = "INSERT INTO `admin`( `name`, `bloodgroup`, `email`, `password`) VALUES ('Shahanaj','B+','Shahanaj@gmail.com','Shahanaj123')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

}


// deleting data 

function Delete(){
  var sql = "DELETE FROM `admin` WHERE id = '6' ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record deleted");
  });

}


// updating data 


function update(){
  var sql = "UPDATE `admin` SET `name`='Nayeem',`bloodgroup`='O+',`email`='nayeem@gmail.com',`password`='nayeem12333' WHERE id = '4' ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record updated");
  });

}

// selecting data 

function select(){
  var sql = "SELECT `name`, `bloodgroup`, `email`, `password` FROM `admin` WHERE id = '1' ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record selected");
  });

}


// selecting all data 

function selectall(){
  var sql = "SELECT * FROM `admin` WHERE id = '2' ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record selected");
  });

}