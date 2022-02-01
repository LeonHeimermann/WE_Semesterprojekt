class Vorrang {	
	constructor(list) {
		const list_tmp = Vorrang.top_sort(list);
		this.list = [];
		for (var i = 0; i < list_tmp.length; i++) {
			this.list.push(list_tmp[i][0]);
		}
		this.list.push(list_tmp[list_tmp.length - 1][1]);
	}
	
	static top_sort(list_param) {
		var list = [...list_param]
		var output = []
		const len = list.length;
		for (var _ = 0; _ < len; _++) {
			let indexI = -1;
			let indexJ = -1;
			for (var i = 0; i < list.length; i++){
				indexI = i;
				indexJ = -1;
				for (var j = 0; j < list.length; j++) {
					if (i != j && list[i][0] == list[j][1]) {
						indexJ = j;
						break;
					}
				}
				if (indexJ == -1){
					break;
				}
			}
			output.push(list[indexI]);
			list.splice(indexI, 1);
		}
		return output;
	}
	
	* iter() {
		for (const elem of this.list) {
			yield elem;
		}
	}
}


const input_text = document.getElementById('input_text');
const subm = document.getElementById('submit');
const div_out = document.getElementById('div_out');

subm.addEventListener('click', calc);


function calc(event) {
	var txt = input_text.value;
	var outer = txt.split('], [');
	var list_input = [];
	for (const elem of outer) {
		var inner = elem.split('"');
		list_input.push([inner[1], inner[3]]);
	}	
	const vorrang = new Vorrang(list_input);
	for (const elem of vorrang.iter()) {
		const out = document.createElement('p');
		out.innerHTML = elem;
		console.log(div_out);
		div_out.append(out);
	}
}

var counter = 0;

const handler = {
	get(target, prop, receiver) {
		return target.iter();
	}
}

const vorrang = new Vorrang([["studieren", "prüfen"], ["schlafen", "studieren"], ["essen", "studieren"]]);
const proxy = new Proxy(vorrang, handler);

var list = []
console.log(proxy.length);
for (let i = 0; i < proxy.length; i++) {
	console.log(proxy[i]);
}


[["studieren", "prüfen"], ["schlafen", "studieren"], ["essen", "studieren"]]