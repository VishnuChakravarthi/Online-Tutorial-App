<?php
include "login_db.php";

	$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
if ($request->action == 'getTopicList'){
		$table = $request->tableName;
		// $id = $request->id;
		$sql = "SELECT TopicCode, Module_Name FROM $table";
		$rs=$conn->query($sql);
		$num = mysqli_num_rows($rs);
		for ($i=0; $i < $num ; $i++) { 
	
			$row=mysqli_fetch_object($rs);
			
					$topicList[]=$row;
		}
	echo htmlspecialchars(json_encode($topicList),ENT_NOQUOTES);
		// echo 1;
	}
$conn->close();

?>