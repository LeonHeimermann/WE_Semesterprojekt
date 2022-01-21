async function fetchJson(url) {
	const request = await fetch(url);
	return await request.json();
}

var json_txt = fetchJson("text.json");

const div_text = document.getElementById('div_text');
const div_left = document.getElementById('div_left');

const button_html = document.getElementById('b_html');
const button_css = document.getElementById('b_css');
const button_js = document.getElementById('b_js');

div_text.innerHTML = "Hallo";

button_html.addEventListener('click', switch_outer_state('html'));
button_css.addEventListener('click', switch_outer_state('css'));
button_js.addEventListener('click', switch_outer_state('js'));

function switch_outer_state(state) {
	div_left.innerHTML = "";
	var outer = json_txt[state];
	for (int i = 0; i < outer.length; i++) {
		const newButton = document.createElement('button');
		newButton.addEventListener('click', function() {div_text.innerHTML = outer[state][i]["content"]})
		newButton.innerHTML = outer[state][i];
		div_left.append(newButton);
	}		
}