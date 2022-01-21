Promise.all([
	fetch('./A.txt').then(x => x.text()),
	fetch('./B.txt').then(x => x.text())
]).then(([a_full, b_full]) => {
	var a = a_full.split("\n");
	var b = b_full.split("\n");
	for (var i = 0; i < a.length; i++) {
		console.log(a[i].substr(0, a[i].length/2) + b[i].substr(b[i].length/2, b[i].length));
	}
});