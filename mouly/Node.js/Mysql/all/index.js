var mysql=require('mysql');

var DatabaseConnectionConfig={
    host:"localhost",
    user:"root", 
    password:"",
    database: "softDev"
    
}

var con = mysql.createConnection(DatabaseConnectionConfig);

con.connect(function(error){
    if(error){
        console.log("failed");

    }else{
        console.log("success");
<<<<<<< HEAD
         Insert();
         //Delete();
        // update();
        // select();
        // selectall()
=======
         //Insert(con);
         Delete(con);
        // update(con);
        // select(con);
        // selectall(con)
>>>>>>> 6bad752237b9393132f4d62b46f55b3183a8636d
        

    }
});


// inserting data 

<<<<<<< HEAD
function Insert(){
  var sql = "INSERT INTO `admin`( `name`, `bloodgroup`, `email`, `password`) VALUES ('hasem','B+','Shahanaj@gmail.com','Shahanaj123')";
=======
function Insert(con){
  var sql = "INSERT INTO `admin`( `name`, `bloodgroup`, `email`, `password`) VALUES ('Shahanaj','B+','Shahanaj@gmail.com','Shahanaj123')";
>>>>>>> 6bad752237b9393132f4d62b46f55b3183a8636d
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

}


// deleting data 

function Delete(con){
  var sql = "DELETE FROM `admin` WHERE id = '6' ";
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
  var sql = "SELECT * FROM `admin` WHERE id = '2' ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record selected");
    console.log(result);
  });

}