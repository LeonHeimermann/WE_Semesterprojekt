new Vue({
	el:'#vue-app-one',
	data: 
		function() {
			return {
				buttons: []
			}				
		},
	mounted() {
		this.buttons = json_data;
	},
	template: 
		'<div id="d_navigation">' +
			'<div v-for="(button, index) in buttons">' +
				'<div class="d_nav_main">' +
					'<p>{{ button.name }}</p>' +
				'</div>' +
				'<div v-for="sub in button.sub" class="d_nav_sub" @mouseover="activate_color($event)"  @mouseleave="deactivate_color($event)">' +
					'<p>{{ sub.name }}</p>' +
				'</div>' +
			'</div>' +
		'</div>',
	methods: {
		activate_color: function(e) {
			e.target.style.backgroundColor = "#393d47";
			e.target.firstChild.style.backgroundColor = "#393d47";
		},
		deactivate_color: function(e) {
			e.target.style.backgroundColor = "#292c33";
			e.target.firstChild.style.backgroundColor = "#292c33";
		}
	}
});

function clearAll(elem) {
	let par = elem.parentElement.parentElement;
	let children = par.children;
	for (let i = 0; i < children.length; i++) {
		let grandchild = children[i].children;
		if (grandchild !== elem.parentElement.children) {
			for (let i = 1; i < grandchild.length; i++) {
				grandchild[i].style.visibility = "hidden";
			}
		}
	}
}