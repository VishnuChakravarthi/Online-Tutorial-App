<?php

include "login_db.php";

	// header("Access-Control-Allow-Origin: *");
	// header("Content-Type: application/json; charset=utf-8");

	if (isset($_POST['action']) && $_POST['action'] == 'addStudent'){
	$tableName = $_POST['tableName'];
	$photo = $_POST['photo'];
	$phoName = $_POST['phoName'];
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
	$student_status = $_POST['student_status'];

	$session_start = date_format($ses_start,"m/d/Y");
	$session_end = date_format($ses_end,"m/d/Y");
	// $session_end = date_format($ses_end,"d/m/Y");
	$dob = date_format($dob1,"m/d/Y");
	// $date_created = date("m/d/Y h:i:sa", time());

	// $data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $data));
	
    	$sql = "INSERT INTO $tableName (photo, photo_name, first_name, last_name, sex, dob, email_id, user_id, course, session_start, session_end, stud_type, stud_status)
			VALUES ('$photo','$phoName','$first_name', '$last_name', '$sex', '$dob', '$email_id', '$user_id', '$course', '$session_start', '$session_end', '$student_type', '$student_status')";

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

