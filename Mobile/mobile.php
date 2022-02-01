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
<html lang="de">  
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semesterprojekt</title>
	<link rel="stylesheet" href="mobile.css">
  </head>
  <body>
	<div id="d_upper">
		<div id="d_back">
			<svg id="svg_back" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
						<path d="M0,0 L0,6 L9,3 z" fill="#fff" />
					</marker>
				</defs>
				<rect id="r_back" x="5%" y="25%" width="30%" height="50%" fill="#292c33" rx="1.5%" ry="6%" stroke-width="1" stroke="rgb(0,0,0)"/>
				<text x="22%" y="56%" font-size="20" fill="white" id="t_back">Back</text>
				<line x1="20%" y1="50%" x2="11%" y2="50%" stroke="#fff" stroke-width="2" marker-end="url(#arrow)" />
			</svg>
		</div>
	</div>
	<div id="d_lower">
		
	</div>
  </body>
  <script src="mobile.js">
  </script>
</html>