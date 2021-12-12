<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semesterprojekt</title>
	<link rel="stylesheet" href="main.css">
  </head>
  <body>
	<script src="https://unpkg.com/vue"></script>
	<div id="vue-app-one">
		<navigator id="d_navigator" :buttons="[
			{name: 'Einführung', sub: [  
								{name: 'A1'}, 
								{name: 'A2'},
								{name: 'A3'}, 
								{name: 'A4'}
								]}, 
			{name: 'CSS 1', sub: [
								{name: 'A1'}, 
								{name: 'A2'},
								{name: 'A3'}, 
								{name: 'A4'}
								]},
			{name: 'CSS 2', sub: [
								{name: 'A1'}, 
								{name: 'A2'},
								{name: 'A3'}, 
								{name: 'A4'}
								]},
			{name: 'JavaScript', sub: [
								{name: 'A1'}, 
								{name: 'A2'},
								{name: 'A3'}, 
								{name: 'A4'}
								]},
			{name: 'DOM', sub: [
								{name: 'A1'}, 
								{name: 'A2'},
								{name: 'A3'}, 
								{name: 'A4'}
								]},
			{name: 'ECMAScript', sub: [
								{name: 'A1'}, 
								{name: 'A2'},
								{name: 'A3'}, 
								{name: 'A4'}
								]},
			{name: 'Functional', sub: [
								{name: 'A1'}, 
								{name: 'A2'},
								{name: 'A3'}, 
								{name: 'A4'}
								]},
			{name: 'Async', sub: [
								{name: 'xd'}, 
								{name: 'toll'}
								]},
			{name: 'SVG', sub: [
								{name: 'A1'}, 
								{name: 'A2'},
								{name: 'A3'}, 
								{name: 'A4'}
								]},
			{name: 'TypeScript', sub: [
								{name: 'A1'}, 
								{name: 'A2'},
								{name: 'A3'}, 
								{name: 'A4'}
								]},
			{name: 'Vue', sub: [
								{name: 'A1'}, 
								{name: 'A2'},
								{name: 'A3'}, 
								{name: 'A4'}
								]},
			{name: 'PHP', sub: [
								{name: 'A1'}, 
								{name: 'A2'},
								{name: 'A3'}, 
								{name: 'A4'}
								]},
			{name: 'Security', sub: [
								{name: 'A1'}, 
								{name: 'A2'},
								{name: 'A3'}, 
								{name: 'A4'}
								]},
			{name: 'Vue3', sub: [
								{name: 'A1'}, 
								{name: 'A2'},
								{name: 'A3'}, 
								{name: 'A4'}
								]}
			]">
		</navigator>
	</div>
	<div id="d_main">
		<iframe id="if_main" src="./index.php"></iframe>
	</div>
  </body>
  <script src="vue.js"></script>
</html>