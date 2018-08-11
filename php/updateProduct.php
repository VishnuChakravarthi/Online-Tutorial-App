<?php

include "login_db.php";

	// header("Access-Control-Allow-Origin: *");
	// header("Content-Type: application/json; charset=utf-8");

	if (isset($_POST['action']) && $_POST['action'] == 'updateProducts'){
	$tableName = $_POST['tableName'];
	$id = $_POST['id'];
	$name = $_POST['name'];
	$size = $_POST['size'];
	$color = $_POST['color']; 
	$material = $_POST['material']; 
	$price = $_POST['price'];
	$desc = $_POST['desc'];	
	
    	$sql = "UPDATE $tableName SET name = '$name', size = '$size', color = '$color', material = '$material', price = '$price', description = '$desc' WHERE id = '$id' ";

			if ($conn->query($sql) === TRUE) {
			    // echo "New record created successfully";
			    echo "1";
			} else {
			    echo "Error: " . $sql . "<br>" . $conn->error;
			    echo "0";
			}
	
}

if (isset($_POST['action']) && $_POST['action'] == 'updateImage'){
	$tableName = $_POST['tableName'];
	$id = $_POST['id'];
	$file = $_POST['file'];	
	
    	$sql = "UPDATE $tableName SET file = '$file' WHERE id = '$id' ";

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

