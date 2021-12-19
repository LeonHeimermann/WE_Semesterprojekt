const form = document.getElementById('login-form');
const p_failed = document.getElementById('p_failed');

document.querySelector('button').addEventListener('click', e => {
	fetch("./login.php", {
		method: "POST",
		body: new FormData(form)
	}).then(function(res) {
		if (res.ok) {
			window.location.href = "main.php";
		} else {
			alert("Login failed try again");
		}
	}, function(e) {
		alert("Error submitting form!");
	});
});