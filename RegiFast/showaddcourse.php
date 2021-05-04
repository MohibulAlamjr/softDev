
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show Add courses</title>
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
      <!-- css  -->
      <link rel="stylesheet" href="asset/css/new.css">
</head>
<body>
<div class="container">
  <div class="row">
    
    <div style="text-align:center" class="col-sm-12">

    <h1 id="showd">Here is Your Courses</h1>
                    <?php
                $con=mysqli_connect("localhost","root","","regifast");
                // Check connection
                $sId =  $_GET['id'];
                if (mysqli_connect_errno())
                {
                echo "Failed to connect to MySQL: " . mysqli_connect_error();
                }

                $result = mysqli_query($con,"SELECT * FROM addcourses WHERE studentId='$sId'");

                echo "<table  class='table table-dark table-striped' border='1'>
                <tr>
                <th>Serial</th>
                <th>Course Code</th>
                <th>Course Name</th>
                </tr>";
                $y=1;
                while($row = mysqli_fetch_array($result))
                {
                echo "<tr>";
                echo "<td>" . $y . "</td>";
                echo "<td>" . $row['coursecode'] . "</td>";
                echo "<td>" . $row['coursename'] . "</td>";
                echo "</tr>";
                $y++;
                }
                echo "</table>";

                mysqli_close($con);
                ?>
    </div>
    
  </div>
</div>




</body>
</html>

