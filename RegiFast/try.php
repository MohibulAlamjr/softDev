<?php
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
$courseName = $_GET['q'];
$courseId = $_GET['u'];
$sId = $_GET['t'];


 
// Attempt insert query execution
$sql = "INSERT INTO `addcourses`(`studentId`, `coursecode`, `coursename`) VALUES ('$sId','$courseId','$courseName')";
if (mysqli_query($conn, $sql)) {
    echo "yes";
 } else {
   echo "Error: " . $sql . "<br>" . mysqli_error($conn);
 }
 
 mysqli_close($conn);
?>
