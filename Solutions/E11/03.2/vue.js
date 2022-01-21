new Vue({
	el:'#vue-app-one',
	data: {
		htmltext: "",
		leftbuttons: [],
	},
	methods: {
		switch_outer_state: function(state) {
			var json_txt = fetchJson("text.json");
			var outer = json_txt[state];
			for (var i = 0; i < outer.length; i++) {
				leftbuttons.push({
					name: outer[state][i], 
					txt: outer[state][i]["content"]
				});
			}
		},
		change_text: function(input) {
			htmltext = input;
		}
	}
});

async function fetchJson(url) {
	const request = await fetch(url);
	return await request.json();
}