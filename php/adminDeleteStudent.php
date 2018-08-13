<?php

include "login_db.php";

	// header("Access-Control-Allow-Origin: *");
	// header("Content-Type: application/json; charset=utf-8");

	if (isset($_POST['action']) && $_POST['action'] == 'deleteStudent'){
	$tableName = $_POST['tableName'];
	$id = $_POST['id'];
	
    	$sql = "DELETE FROM $tableName WHERE id = '$id' ";

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