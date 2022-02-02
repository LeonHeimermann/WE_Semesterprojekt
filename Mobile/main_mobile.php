<?php
	// Quelle: https://www.youtube.com/watch?v=VKiGDzsCnnE&list=PLKZaiXDcz_NU88jfBMfUfonVAamSA0BnB&index=4
	session_start();
		if(!isset($_SESSION["username"])) {
		header("Location: ../index.php");
		exit;
	}
	clearstatcache();
?>
<!DOCTYPE html>
<script>
	var json_data;
	fetch("../data.json")
	.then(response => {
		json_data_tmp = response.json();
		json_data_tmp.then(data => { 
			json_data = data ;
		});
	});
</script>
<html lang="de">  
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semesterprojekt</title>
	<link rel="stylesheet" href="main_mobile.css">
  </head>
  <body>
	<script src="https://unpkg.com/vue"></script>
	<div id="vue-app-one">
	</div>
  </body>
  <script src="vue_mobile.js"></script>
</html>