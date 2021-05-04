
 <?php

if(isset($_POST['SubmitButton'])){ //check if form was submitted
 
  
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "regifast";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// Escape user inputs for security
$courseName = $_POST['name'];
$courseId = $_POST['cid'];
$sId =  $_GET['id'];


 
// Attempt insert query execution
$sql = "INSERT INTO `addcourses`(`studentId`, `coursecode`, `coursename`) VALUES ('$sId','$courseId','$courseName')";
if (mysqli_query($conn, $sql)) {
    echo "<p class='sh01'>You are successfully add course= $courseName and course ID= $courseId</p>";
 } else {
   echo "Error: " . $sql . "<br>" . mysqli_error($conn);
 }
 
 mysqli_close($conn);



}    
?> 







<!DOCTYPE html>
<html lang="en">
<head>
 <title>Course Registration</title>
       <!-- Latest compiled and minified CSS -->
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

   <!-- jQuery library -->
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

   <!-- Popper JS -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

   <!-- Latest compiled JavaScript -->
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <!-- font  -->
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet">

      <link href="//db.onlinewebfonts.com/c/a4e256ed67403c6ad5d43937ed48a77b?family=Core+Sans+N+W01+35+Light" rel="stylesheet" type="text/css"/>
      <!-- my style -->
   <link rel="stylesheet" href="asset/css/new.css">
</head>
<body>
  
    <div class="wrapper">
        <div class="container">
            <div class="row">
              <div class="col-sm-2">
                
              </div>
              
              <div  class="col-sm-8 courseform">
                <h1>Add Your Course</h1>
                <div id="main">

                <form action="" method="post">
                    <div id="card" class="card1">
                        <form>
                        <div class="card text-center">
                        
                            <div id="txtHint" class="card-header">
                              Course Details 
                            </div>
                            <div class="card-body">
                                    
                                  <div class="form-row align-items-center">
                                    <div class="col-auto">
                                        <label class="sr-only" for="inlineFormInput">Name</label>
                                        <input name="name" type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Course Name">
                                    </div>
                                    <div class="col-auto">
                                        <label class="sr-only" for="inlineFormInputGroup">Username</label>
                                        
                    
                                          <input name="cid" type="text" class="form-control" id="inlineFormInputGroup" placeholder="Course Id">
                                      </div>
                                    
                                      
                                    <div class="col-auto">
                                    <input type="submit" name="SubmitButton" />
                                        
                                    </div>
                                  </div>
                                 
                            </div>
                            
                          </div>
                        </form>
                    </div>
                  </form>
                  </div>




                   





                   



                    


                   

                   
              </div>
              <div class="col-sm-5">
              <button  id="btn001"  type="button" class="btn btn-success btn-lg btn-block">Save and Finish</button>
              <button  id="btn002" type="button" class="btn btn-success btn-lg"><a class="anc" href="http://localhost/RegiFast/Success.php?<?php echo 'id='.$_GET['id'] ?>">Confirm Now</a></button>
              </div>
            </div>
          </div>
    </div>



    
    
<script src="asset/js/main.js"></script>
</body>
</html>