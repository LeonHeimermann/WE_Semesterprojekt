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
				'<div v-for="sub in button.sub" class="d_nav_sub" @click="change_content(sub.type, sub.path, sub.path_task)"> ' +
					'<p>{{ sub.name }}</p>' +
				'</div>' +
			'</div>' +
		'</div>',
	methods: {
		change_content: function(type, path, path_task) {
			//Quelle: http://net-informations.com/js/iq/load.htm
			window.location = './mobile.php?type=' + type + '&path=' + path + '&path_task=' + path_task;
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