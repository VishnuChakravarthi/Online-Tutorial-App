<?php
include "login_db.php";

$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
if ($request->action == 'getFile'){
		$table = $request->tableName;

		$sql = "SELECT * FROM $table";
		$rs=$conn->query($sql);
		$num = mysqli_num_rows($rs);
		for ($i=0; $i < $num ; $i++) { 
	
			$row=mysqli_fetch_object($rs);
			
					$tShirt[]=$row;
		}
	echo htmlspecialchars(json_encode($tShirt),ENT_NOQUOTES);
	}

$conn->close();

?>