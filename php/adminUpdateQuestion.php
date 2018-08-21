<?php

include "login_db.php";

  // header("Access-Control-Allow-Origin: *");
  // header("Content-Type: application/json; charset=utf-8");

  $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

  if ($request->action == 'updateQuestion'){
  $tableName = $request->tableName;
  $qid = $request->quesId;
  $question = $request->question;
  $difficulty = $request->difficulty;
  $typeOfAns = $request->typeOfAns;
  $option1 = $request->option1;
  $option2 = $request->option2;
  $option3 = $request->option3; 
  $option4 = $request->option4; 
  $explanation = $request->explanation;
  $correctOption = $request->correctOption;


  // $sql = "INSERT INTO $tableName (, , , dob, email_id, user_id, course, session_start, session_end, stud_type, stud_status)
      //  VALUES ('$first_name', '$last_name', '$sex', '$dob', '$email_id', '$user_id', '$course', '$session_start', '$session_end', '$student_type', '$student_status')";
  
      $sql = "UPDATE $tableName SET QusStatement = '$question', ansType = '$typeOfAns', QusOpt1 = '$option1', 
      QusOpt2 = '$option2', QusOpt3 = '$option3', QusOpt4 = '$option4', QusSolution = '$correctOption', 
      QusSolutionExpln = '$explanation', QusRating = '$difficulty' WHERE QusId = '$qid' ";

      if ($conn->query($sql) === TRUE) {
          // echo "New record created successfully";
          echo "1";
      } else {
          echo "Error: " . $sql . "<br>" . $conn->error;
          // echo "0";
      }
  
}

$conn->close();

?>

