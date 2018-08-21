
<?php

include "login_db.php";

$postData = file_get_contents("php://input");
$request = json_decode($postData);

if($request->action == 'adminLogin'){
	$tablename = $request->tableName;
	$email = $request->email;
	$password = $request->password;

	$sql = "SELECT * FROM $tablename WHERE email = '$email' AND password = '$password' limit 1";

		$rs=$conn->query($sql);
		$row=mysqli_fetch_object($rs);
		$userDetail = array();
		if (mysqli_num_rows($rs) <= 0){
			echo "0";
		} else {
			session_start();
			$sql1 = "UPDATE $tablename SET login='isTrue' WHERE email='$email'";
			$rs1=$conn->query($sql1);
			$token = bin2hex(openssl_random_pseudo_bytes(16));
			$row -> auth = $token;
			$userDetail[] = $row;
			echo htmlspecialchars(json_encode($userDetail),ENT_NOQUOTES);
		}
		
	// } else if (isset($_POST['action']) && $_POST['action'] == 'logout'){
	// 	$email = $_POST['email'];
	// 	date_default_timezone_set('Europe/London');
	// 	$date = date("m/d/Y h:i:sa", time());
	// 	session_destroy(); 
	// 	$sql = "UPDATE new_dropbox SET login='isFalse', lastLogin='$date' WHERE email='$email'";
	// 	$rs=$conn->query($sql);
	// 	if($rs === TRUE){
	// 		echo '1';
	// 	}
		
	} else echo "this is not Login";

$conn->close();

?>