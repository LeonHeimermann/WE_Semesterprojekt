function fibo(index) {
	var a = BigInt(0);
	var b = BigInt(1);
	var output = []
	for (var i = 0; i < index; i++) {
		output.push(b);
		var tmp = b;
		b += a;
		a = tmp;
	}
	return output;
}	


var list = fibo(2000);
console.log(list);