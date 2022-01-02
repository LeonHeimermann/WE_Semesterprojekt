Vue.component('navigator', {
	props: ['buttons'],
	template: 
		'<div>' +
			'<div v-for="(button, index) in buttons">' +
				'<div  @click="change_visible($event)" @mouseover="activate_color($event)"  @mouseleave="deactivate_color($event)">' +
					'<p>{{ button.name }}</p>' +
				'</div>' +
				'<div class="nav_sub" v-for="sub in button.sub" style="visibility:hidden" @mouseover="activate_color($event)"  @mouseleave="deactivate_color($event)">' +
					'<p>{{ sub.name }}</p>' +
				'</div>' +
			'</div>' +
		'</div>',
	methods: {
		change_visible: function(e) {
			clearAll(e.target);
			let par = e.target.parentElement;
			let children = par.children;
			for (let i = 1; i < children.length; i++) {
				if (children[i].style.visibility == "hidden") {
					children[i].style.visibility = "visible";
				}else {
					children[i].style.visibility = "hidden";
				}
			}
		},
		activate_color: function(e) {
			e.target.style.backgroundColor = "#2b5551";
		},
		deactivate_color: function(e) {
			e.target.style.backgroundColor = "#41807c";
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

new Vue({
	el:'#vue-app-one'
});