function switch_outer_state(state, inner, json_data) {
	div_left.innerHTML = json_data[state][inner]["left"];	
	div_text.innerHTML = json_data[state][inner]["text"];
}

const button_html = document.getElementById('b_html');
const button_css = document.getElementById('b_css');
const button_js = document.getElementById('b_js');

const div_text = document.getElementById('div_text');
const div_left = document.getElementById('div_left');

fetch("text.json")
		.then(response => {
			json_data_tmp = response.json();
			json_data_tmp.then(data => { 
				var json_txt = data;
				
				button_html.addEventListener('click', function() { switch_outer_state(0, "html", json_txt) });
				button_css.addEventListener('click', function() { switch_outer_state(1, "css", json_txt) });
				button_js.addEventListener('click', function() { switch_outer_state(2, "js", json_txt) });
			});
		});