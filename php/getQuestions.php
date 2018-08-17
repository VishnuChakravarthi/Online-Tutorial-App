<?php
include "login_db.php";

	$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
if ($request->action == 'getQuestionList'){
		$table = $request->tableName;
		$topicCode = $request->topicCode;
		$sql = "SELECT * FROM $table WHERE TopicCode = '$topicCode'";
		$rs=$conn->query($sql);
		$num = mysqli_num_rows($rs);
		for ($i=0; $i < $num ; $i++) { 
	
			$row=mysqli_fetch_object($rs);
					$questions[]=$row;

				
		}
		// echo 1;
		if (empty($questions)) {
     				echo null;
				}else{
					echo htmlspecialchars_decode(json_encode($questions),ENT_NOQUOTES);
				}
	}
$conn->close();

?>