Vue.component('my-menu', {
	props: ['buttons'],
	template: 
		'<div>' +
			'<ul>' +
				'<li v-for="button in buttons" @click="handler(button)">{{ button.name }}</li>' +
			'</ul>' +
		'</div>',
	methods: {
		handler(item) {
			eval(item.func)();
		}
	}
});

new Vue({
	el:'#vue-app-one'
});