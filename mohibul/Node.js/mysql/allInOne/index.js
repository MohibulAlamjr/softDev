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
         //Insert(con);
         //Delete(con);
        // update(con);
        // select(con);
         selectall(con)
        

    }
});


// inserting data 

function Insert(con){
  var sql = "INSERT INTO `admin`( `name`, `bloodgroup`, `email`, `password`) VALUES ('hasem','B+','Shahanaj@gmail.com','Shahanaj123')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

}


// deleting data 

function Delete(con){
  var sql = "DELETE FROM `admin` WHERE id = '16' ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record deleted");
  });

}


// updating data 


function update(con){
  var sql = "UPDATE `admin` SET `name`='Nayeem',`bloodgroup`='O+',`email`='nayeem@gmail.com',`password`='nayeem12333' WHERE id = '4' ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record updated");
  });

}

// selecting data 

function select(con){
  var sql = "SELECT `name`, `bloodgroup`, `email`, `password` FROM `admin` WHERE id = '1' ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record selected");
    console.log(result);
  });

}


// selecting all data 

function selectall(con){
  var sql = "SELECT * FROM `admin` WHERE id = '12' ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record selected");
    //console.log(result)
    console.log(JSON.stringify(result));
  });

}