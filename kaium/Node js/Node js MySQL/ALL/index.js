      var mysql = require('mysql');

      var DatabaseConnectionConfig = {
        host: "localhost",
        user: "root",
        password: "",
        database: "softdev"

      }

      var con = mysql.createConnection(DatabaseConnectionConfig);

      con.connect(function (error) {
        if (error) {
          console.log("failed");

        } else {
          console.log("success");
          //Insert();
          //Delete();
          //update();
          //select();
          //selectall();
          //selectbyWhere(con);
          //multipleInsterData();
          //  order(con);
          limits(con);
       }
      });


      // inserting data 
      function Insert() {
        var sql = "INSERT INTO `admin`( `name`, `bloodgroup`, `email`, `password`) VALUES ('sorif','AB(-)','sorif123@gmail.com','sorif123')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record Inserted");
          console.log(result);
        });

      }


      // Delete();

      function Delete() {
        var sql = "DELETE FROM `admin` WHERE is ='6'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record Selected");
          console.log(result);
        });

      }


      // update()
      function update() {
        var sql = "UPDATE `admin` SET `password`='ASDGEXH' WHERE id ='1'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record Selected");
          console.log(result);
        });

      }

      //  select

      function select() {
        var sql = "SELECT `id`, `name`, `bloodgroup`, `email`, `password` FROM `admin` WHERE id='1'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record Selected");
          console.log(result);
        });

      }


      // selectall()

      function selectall() {
        var sql = "SELECT * FROM `admin` WHERE id='1'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record Selected");
          console.log(result);
        });

      }

      //multipleInsterData() 


      function multipleInsterData() {
        var sql = "INSERT INTO `admin`( `name`, `bloodgroup`, `email`, `password`) VALUES ('salam','C(+)','salam123@gmail.com','salam123'),('kamal','D(+)','kamal123@gmail.com','kamal123'),('rofiq','E(+)','rofiq123@gmail.com','rofiq123')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record Selected");
          console.log(result);
        });

      }


      // ===================================================


      //selectByWhere(con);

      function selectbyWhere(con) {
        var idj = "3";
        var namem = "Sweety";
        //var sql = "SELECT * FROM `admin` WHERE id = " + mysql.escape(id);
        //var sql="SELECT * FROM `admin` WHERE name LIKE 'S%'";
        //var sql = "SELECT * FROM `admin` WHERE id = ?" ;
        var sql = "SELECT * FROM `admin`  WHERE name = ? OR id = ?";

        con.query(sql, [namem, idj], function (err, result)
          //  con.query(sql,function (err, result) 

          {
            if (err) throw err;
            console.log(result[0].name);
          });

      }


      //orderBy(con);
      function order(con) {


        //var sql = "SELECT * FROM `admin` ORDER BY id" ;
        var sql = "SELECT * FROM `admin` ORDER BY id DESC ";


        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result);
        });

      }





      //dropTable(con);
      function dropTable(con) {
        var sql = "DROP TABLE kaium";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result);
        });

      }






      // limits(con);

      function limits(con) {
        //var sql = "SELECT * FROM `admin` LIMIT 3" ;
        //var sql = "SELECT * FROM `admin` ORDER BY id DESC LIMIT 3" ;
        //var sql = "SELECT * FROM `admin` LIMIT 5 OFFSET 4" ;
        var sql = "SELECT * FROM `admin` LIMIT 5, 7";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result);
        });

      }

      // =============================================================================


