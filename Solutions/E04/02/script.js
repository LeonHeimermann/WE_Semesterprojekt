function Person() {
	this.arr = [];
	this.addAuto = function(auto) {
		auto.taken++;
		this.arr.push(auto);
	};
}

function Auto() {
	this.taken = 0;
}

function conflict(auto) {
	return auto.taken > 1;
}


var a1 = new Auto();

var p1 = new Person();
p1.addAuto(a1);
var p2 = new Person();
p2.addAuto(a1);

console.log(conflict(a1));