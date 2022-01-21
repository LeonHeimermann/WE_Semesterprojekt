<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A1</title>
  </head>
  <body>
	<form id="f_registration" method="post">
		<label for="i_name">Username: </label>
		<input type="text" id="i_name" name="name">
		<br><br>
		<label for="i_password">Passwort: </label>
		<input type="text" id="i_password" name="password">
		<br><br>
		<button id="b_submit">Register</button>
	</form>
  </body>
  <script>
	const form = document.getElementById('f_registration');
	document.querySelector('button').addEventListener('click', e => {
		fetch("./register.php", {
			method: "POST",
			body: new FormData(form)
		}).then(function(res) {
			console.log(res);
			if (res.ok) {
				alert("Registration was successfully");
			} else {
				alert("Registration failed");
			}
		}, function(e) {
			alert("Error submitting form!");
		});
	});
  </script>
</html>