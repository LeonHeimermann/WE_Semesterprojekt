async function getText() {
	a_full = await(await fetch('A.txt')).text();
	b_full = await(await fetch('B.txt')).text();
  
	var a = a_full.match(/[^\r\n]+/g);
	var b = b_full.match(/[^\r\n]+/g);
	for (var i = 0; i < a.length; i++) {
		console.log(a[i].substr(0, a[i].length/2) + b[i].substr(b[i].length/2, b[i].length));
	}
}

getText();