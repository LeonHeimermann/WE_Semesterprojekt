const seperators = [['[', ']'], ['(', ')'], ['{', '}']];

const input_text = document.getElementById('input_text');
const subm = document.getElementById('submit');
subm.addEventListener('click', mark);


function mark(event) {
	const txt = input_text.value;
	
	for (const elem of seperators) {
		let first = txt.split(elem[0]);
		let second = txt.split(elem[1]);
		if (first.length != second.length) {
			input_text.style.backgroundColor = "red";
			return 0;
		}
	}
	
	input_text.style.backgroundColor = "white";
}





