<?PHP

if (isset($_POST['name']) && isset($_POST['password'])) {
	$SALT = "WE";
	
	$name = hash("sha512", $_POST['name']. $SALT);
	$password = hash("sha512", $_POST['password'] . $SALT);
	
	include "passwd.php";
	
	
	
	if (array_key_exists($name, $passwords_secret)) {
		if (!($passwords_secret[$name] === $password)) {
			header('HTTP/1.0 401 Unauthorized');
		}
	}else {
		header('HTTP/1.0 401 Unauthorized');
	}
	
}

?>