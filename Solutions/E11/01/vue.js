Vue.component('analyser', {
	template: 
		'<div>' +
			'<input type="text" v-model="srStatus">' +
			'<p>{{ amount_letters }}</p>' +
			'<p>{{ amount_blanks }}</p>' +
			'<p>{{ amount_words }}</p>' +
		'</div>',
	data: 
		function() {
			return {
				amount_letters: "Anzahl der Buchstaben: 0",
				amount_blanks: "Anzahl der Leerzeichen: 0",
				amount_words: "Anzahl der Wörter: 0",
				srStatus: ""
			}
	},
	watch: {
		srStatus: function(val, oldVal) {
			a_l = 0;
			a_b = 0;
			a_w = 0;
			for (var i = 0; i < val.length; i++) {
				let c = val.charAt(i);
				if (c == " ") {
					a_b++;
				}else {
					if ((i == 0) || (val.charAt(i - 1) == " ")) {
						a_w++;
					}
					a_l++;
				}
			}
			this.amount_letters = "Anzahl der Buchstaben: " + a_l;
			this.amount_blanks = "Anzahl der Leerzeichen: " + a_b;
			this.amount_words = "Anzahl der Wörter: " + a_w;
		}
	}
});

new Vue({
	el:'#vue-app-one'
});

new Vue({
	el:'#vue-app-two'
});