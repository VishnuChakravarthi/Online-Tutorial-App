<?php

include "login_db.php";

  // header("Access-Control-Allow-Origin: *");
  // header("Content-Type: application/json; charset=utf-8");

  $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

  if ($request->action == 'addWeightage'){
  $tableName = $request->tableName;
  $topiccode = $request->topicCode;
  $test = $request->test;
  $weightage = array(
    'easy' => $request->ec,
    'medium' => $request->med,
    'hard' => $request->hard,
    'masterclass' => $request->mc,
    );
  

  $serialized_array = json_encode($weightage);
  // $store = str_replace('"', '', $serialized_array);

  $sql = "UPDATE $tableName SET $test = ('$serialized_array') WHERE TopicCode = '$topiccode'";
  
      // $sql = "UPDATE $tableName SET QusStatement = '$question', ansType = '$typeOfAns', QusOpt1 = '$option1', 
      // QusOpt2 = '$option2', QusOpt3 = '$option3', QusOpt4 = '$option4', QusSolution = '$correctOption', 
      // QusSolutionExpln = '$explanation', QusRating = '$difficulty' WHERE QusId = '$qid' ";

      if ($conn->query($sql) === TRUE) {
          // echo "New record created successfully";
          echo "1";
      } else {
          echo "Error: " . $sql . "<br>" . $conn->error;
          // echo "0";
      }
  
}else if($request->action == 'getTotalWeightage'){
  $tableName = $request->tableName;
  $column = $request->column;

  $sql = "SELECT TopicCode, $column FROM $tableName" ;
  
    // $sql = "SELECT TopicCode,MockTest1 FROM testweightage limit 2";
  
    $rs=$conn->query($sql);
    $num = mysqli_num_rows($rs);
    for ($i=0; $i < $num ; $i++) { 
  
      $row = mysqli_fetch_object($rs);
          $weightage[] = $row;

      // echo $weightage;
    }
  echo htmlspecialchars(json_encode($weightage),ENT_NOQUOTES);
  // echo stripslashes($e);
    // echo 1;

}
  
$conn->close();
/*unserialize

$deserialized_array = unserialize($serialized_array);

https://www.intechgrity.com/storing-php-arrays-objects-file-database/#*/
?>

