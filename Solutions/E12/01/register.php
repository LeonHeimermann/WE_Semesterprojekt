<?PHP

if (isset($_POST['name']) && isset($_POST['password'])) {
	$SALT = "WE";
	
	$name = hash("sha512", $_POST['name']. $SALT);
	$password =  hash("sha512", $_POST['password'] . $SALT);
	
	$file_name = './data.csv';
	
	$file = file($file_name, FILE_IGNORE_NEW_LINES);
	$found = false;
	
	foreach ($file as &$elem) {
		$part = explode(",", $elem)[0];
		if (strcmp($part, $name) == 0) {
			$found = true;
		}
	}
	
	if ($found) {
		header("HTTP/1.1 404 Not Found");
	}else {
		$new_line = $name.','.$password."\n";
		
		if (file_put_contents($file_name, $new_line, FILE_APPEND | LOCK_EX )){
			echo "<script>alert('Registered successfully!')</script>";
		}else {
			header("HTTP/1.1 404 Not Found");
		}
	}
}

?>