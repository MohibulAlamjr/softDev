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



$myusername = $_POST['username'];
$mypassword = $_POST['password'];

$sql = "SELECT pass FROM userdata WHERE id = '$myusername'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    if($row["pass"]==$mypassword){
        header("http://localhost/HousePlant/home.php?");
    }else{
        echo"Your Login Name or Password is invalid";
    }
  }
} else {
    echo"Your Login Name invalid";
}
$conn->close();
?>