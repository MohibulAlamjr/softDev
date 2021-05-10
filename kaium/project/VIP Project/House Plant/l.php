<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "houseplant";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// Escape user inputs for security
$first_name =$_POST['fname'];
$last_name = $_POST['lname'];
$id = $_POST['id'];
$email = $_POST['email'];
$password = $_POST['password'];
$bg = $_POST['bloodgroup'];
$phone = $_POST['phonenumber'];
$gender = $_POST['inlineRadioOptions'];


 
// Attempt insert query execution
$sql = "INSERT INTO userdata (fname, lname, id, email, pass, phone, bgroup,gender) VALUES ('$first_name', '$last_name','$id','$email','$password','$phone','$bg','$gender')";
if (mysqli_query($conn, $sql)) {
   header("http://localhost/HousePlant/login.html");
 } else {
   echo "Error: " . $sql . "<br>" . mysqli_error($conn);
 }
 
 mysqli_close($conn);
?>




