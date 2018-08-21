<?php
include "login_db.php";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if ($request->action == 'createQuestions'){
	$tableName = $request->tableName;
	$topic_code = $request->topiccode;
	$question = $request->question;
	$ans_type = $request->typeOfAns;
	$difficulty = $request->difficulty; 
	$option1 = $request->option1; 
	$option2 = $request->option2;
	$option3 = $request->option3;
	$option4 = $request->option4;
	$correct_opt = $request->correctOption;
	$explanation = $request->explanation;

	
    	$sql = "INSERT INTO $tableName (TopicCode, QusStatement, ansType, QusRating, QusOpt1, QusOpt2, QusOpt3, QusOpt4, QusSolution, QusSolutionExpln)
			VALUES ('$topic_code', '$question', '$ans_type', '$difficulty', '$option1', '$option2', '$option3', '$option4', '$correct_opt', '$explanation')";

			if ($conn->query($sql) === TRUE) {
			    echo 1;
			} else {
			    echo "Error: " . $sql . "<br>" . $conn->error;
			    // echo 0;
			}
	
}
// echo 0;
$conn->close();
?>