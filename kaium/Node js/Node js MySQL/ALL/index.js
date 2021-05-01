      var mysql=require('mysql');

      var DatabaseConnectionConfig={host:"localhost",user:"root", password:"",database: "softdev"
          
      }

      var con = mysql.createConnection(DatabaseConnectionConfig);

      con.connect(function(error){
          if(error){
              console.log("failed");

          }else{
              console.log("success");
              //Insert();
              //Delete();
              //update();
               //select();
              selectall()
              // selectbyWhere()
              

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
        var sql = "INSERT INTO `admin`( `name`, `bloodgroup`, `email`, `password`) VALUES ('sorif','AB(-)','sorif123@gmail.com','sorif123')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record Inserted");
          console.log(result);
        });

      }



      // Delete();

      function Delete(){
        var sql = "DELETE FROM `admin` WHERE is ='6'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record Selected");
          console.log(result);
        });

      }


      // update()
      function update(){
        var sql = "UPDATE `admin` SET `password`='ASDGEXH' WHERE id ='1'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record Selected");
          console.log(result);
        });

      }

  //  select

 function select(){
        var sql = "SELECT `id`, `name`, `bloodgroup`, `email`, `password` FROM `admin` WHERE id='1'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record Selected");
          console.log(result);
        });

      }




    // selectall()

 function selectall(){
        var sql = "SELECT * FROM `admin` WHERE id='1'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record Selected");
          console.log(result);
        });

      }
