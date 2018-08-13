<?php

include "login_db.php";

	// header("Access-Control-Allow-Origin: *");
	// header("Content-Type: application/json; charset=utf-8");

	if (isset($_POST['action']) && $_POST['action'] == 'updateStudent'){
	$tableName = $_POST['tableName'];
	$id = $_POST['id'];
	$photo = $_POST['photo'];
	$pho_name = $_POST['phoName'];
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
	$dob = date_format($dob1,"m/d/Y");

	// $sql = "INSERT INTO $tableName (, , , dob, email_id, user_id, course, session_start, session_end, stud_type, stud_status)
			//  VALUES ('$first_name', '$last_name', '$sex', '$dob', '$email_id', '$user_id', '$course', '$session_start', '$session_end', '$student_type', '$student_status')";
	
    	$sql = "UPDATE $tableName SET photo = '$photo', photo_name = '$pho_name', first_name = '$first_name', last_name = '$last_name', 
    	sex = '$sex', dob = '$dob', email_id = '$email_id', user_id = '$user_id', course = '$course', session_start = '$session_start', 
    	session_end = '$session_end', stud_type = '$student_type', stud_status = '$student_status' WHERE id = '$id' ";

			if ($conn->query($sql) === TRUE) {
			    // echo "New record created successfully";
			    echo "1";
			} else {
			    echo "Error: " . $sql . "<br>" . $conn->error;
			    // echo "0";
			}
	
}

// if (isset($_POST['action']) && $_POST['action'] == 'updateImage'){
// 	$tableName = $_POST['tableName'];
// 	$id = $_POST['id'];
// 	$file = $_POST['file'];	
	
//     	$sql = "UPDATE $tableName SET file = '$file' WHERE id = '$id' ";

// 			if ($conn->query($sql) === TRUE) {
// 			    // echo "New record created successfully";
// 			    echo "1";
// 			} else {
// 			    echo "Error: " . $sql . "<br>" . $conn->error;
// 			    echo "0";
// 			}
	
// }

$conn->close();

?>

