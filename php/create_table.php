<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "online_tutorial";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// sql to create table
	$sql = "CREATE TABLE 'studentList' (
	id INT(6) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	dob DATE NOT NULL,
	email_id VARCHAR(50) NOT NULL,
	user_id VARCHAR(50) NOT NULL,
	course VARCHAR(30) NOT NULL,
	session_start DATE NOT NULL,
	session_end DATE NOT NULL,
	stud_type VARCHAR(10) NOT NULL
	)";

	if ($conn->query($sql) === TRUE) {
    echo "Table dropboxUsers created successfully";
	} else {
    echo "Error creating table: " . $conn->error;
	}
	


	// $sql = "INSERT INTO user (firstname, lastname, email)
	// VALUES ('Vishnu', 'Chakravarthy', 'vishchakravarthy18@gmail.com')";

	// if ($conn->query($sql) === TRUE) {
	//     echo "New record created successfully";
	// } else {
	//     echo "Error: " . $sql . "<br>" . $conn->error;
	// }

$conn->close();
?>