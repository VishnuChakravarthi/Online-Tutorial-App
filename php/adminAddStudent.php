<?php

include "login_db.php";

	// header("Access-Control-Allow-Origin: *");
	// header("Content-Type: application/json; charset=utf-8");

	if (isset($_POST['action']) && $_POST['action'] == 'addStudent'){
	$tableName = $_POST['tableName'];
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$sex = $_POST['sex'];
	$dob1 = date_create($_POST['dob']); 
	$email_id = $_POST['email_id']; 
	$user_id = $_POST['user_id'];
	$course = $_POST['course'];
	$ses_start = date_create($_POST['ses_start']);
	$ses_end = date_create($_POST['ses_end']);
	$student_type = $_POST['student_type'];

	$session_start = date_format($ses_start,"Y/m/d");
	$session_end = date_format($ses_end,"Y/m/d");
	$dob = date_format($dob1,"Y/m/d");
	// $date_created = date("m/d/Y h:i:sa", time());

	
    	$sql = "INSERT INTO $tableName (first_name, last_name, sex, dob, email_id, user_id, course, session_start, session_end, stud_type)
			VALUES ('$first_name', '$last_name', '$sex', '$dob', '$email_id', '$user_id', '$course', '$session_start', '$session_end', '$student_type')";

			if ($conn->query($sql) === TRUE) {
			    // echo "New record created successfully";
			    echo "1";
			} else {
			    echo "Error: " . $sql . "<br>" . $conn->error;
			    echo "0";
			}
	
}

$conn->close();

?>

