<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A1</title>
  </head>
  <body>
	<form id="f_login" method="post">
		<label for="i_name">Username: </label>
		<input type="text" id="i_name" name="name">
		<br><br>
		<label for="i_password">Passwort: </label>
		<input type="text" id="i_password" name="password">
		<br><br>
		<button id="b_submit">Login</button>
	</form>
  </body>
  <script>
	const form = document.getElementById('f_login');
	document.querySelector('button').addEventListener('click', e => {
		fetch("./login.php", {
			method: "POST",
			body: new FormData(form)
		}).then(function(res) {
			if (res.ok) {
				alert("Login was successfully");
			} else {
				alert("Login failed");
			}
		}, function(e) {
			alert("Error submitting form!");
		});
	});
  </script>
</html>