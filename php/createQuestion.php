<?php
include "login_db.php";

	if (isset($_POST['action']) && $_POST['action'] == 'createQuestion'){
	$tableName = $_POST['tableName'];
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$dob = $_POST['dob']; 
	$email_id = $_POST['email_id']; 
	$user_id = $_POST['user_id'];
	$course = $_POST['course'];
	$session_start = $_POST['session_start'];
	$session_end = $_POST['session_end'];
	$student_type = $_POST['student_type'];
	$date_created = $_POST['date_created'];

	
    	$sql = "INSERT INTO $tableName (first_name, last_name, dob, email_id, user_id, course, session_start, session_end, stud_type, date_created)
			VALUES ('$first_name', '$last_name', '$dob', '$email_id', '$user_id', '$course', '$session_start', '$session_end', '$student_type', 'date_created')";

			if ($conn->query($sql) === TRUE) {
			    // echo "New record created successfully";
			    echo "1";
			} else {
			    echo "Error: " . $sql . "<br>" . $conn->error;
			    echo "0";
			}
	
}


?>