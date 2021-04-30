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
        console.log("Done");
        //  Insert();
        //  Delete();
        //   select();
        //  selectall();
         update();
        

    }
});


// inserting data 

function Insert(){
  var sql = "INSERT INTO `admin`( `name`, `bloodgroup`, `email`, `password`) VALUES ('Aniba','B-','anibarahim@gmail.com','aniba34627'),('Awashi','AB-','awashighij@gmail.com','awashi7890')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

}

// Delete 


function Delete(){
    var sql = "DELETE FROM `admin` WHERE id = '6' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record deleted");
    });
  
  }

//   Selecting 
  

function select(){
    var sql = "SELECT `name`, `bloodgroup`, `email`, `password` FROM `admin` WHERE id = '9' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  
  }


// Select All 


function selectall(){
    var sql = "SELECT * FROM `admin` WHERE id = '8' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  
  }


// Update 


function update(){
    var sql = "UPDATE `admin` SET `name`='Baten KHan',`bloodgroup`='O+',`email`='batenkhan123@gmail.com',`password`='baten9999' WHERE id = '11' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record updated");
    });
  
  }












