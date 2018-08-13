<?php
include "login_db.php";

	$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
if ($request->action == 'getStudentDetail'){
		$table = $request->tableName;
		$id = $request->id;
		$sql = "SELECT * FROM $table WHERE id = $id";
		$rs=$conn->query($sql);
		$num = mysqli_num_rows($rs);
		for ($i=0; $i < $num ; $i++) { 
	
			$row=mysqli_fetch_object($rs);
			
					$studentDet[]=$row;
		}
	echo htmlspecialchars(json_encode($studentDet),ENT_NOQUOTES);
		// echo 1;
	}
$conn->close();

?>