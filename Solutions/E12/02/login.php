<?PHP

if (isset($_POST['name']) && isset($_POST['password'])) {
	$SALT = "WE";
	
	$name = hash("sha512", $_POST['name']. $SALT);
	$password = hash("sha512", $_POST['password'] . $SALT);
	
	$file_name = './data.csv';
	
	$file = file($file_name, FILE_IGNORE_NEW_LINES);
	
	$found = false;
	
	foreach ($file as &$elem) {
		$parts = explode(",", $elem);
		if ((strcmp($parts[0], $name) == 0)&&(strcmp($parts[1], $password) == 0)) {
			$found = true;
		}
	}
	
	if (!$found) {
		header("HTTP/1.1 404 Not Found");
	}
}

?>