var mysql=require('mysql');

var DatabaseConnectionConfig={host:"localhost",user:"root", password:"",database: "softdev"
    
}

var con = mysql.createConnection(DatabaseConnectionConfig);

con.connect(function(error){
    if(error){
        console.log("failed");

    }else{
        console.log("success");
        //  Insert();
         //Delete();
        // update();
        // select();
        // selectall()
        selectbyWhere()
        

    }
});


// Select Where

function selectbyWhere(){
  var sql = "SELECT `name`, `bloodgroup`, `email`, `password` FROM `admin` WHERE  id ='1'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record Selected");
    console.log(result);
  });

}




// inserting data 
function Insert(){
  var sql = "";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record Selected");
    console.log(result);
  });

}


