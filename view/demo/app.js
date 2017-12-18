var router = new VueRouter({
	routes: [
		{
			path: '/',
			component: Vue.load('view/demo/list')
		},{
			path: '/:id',
			component: Vue.load('view/demo/edit')
		}
	]
});

var app = new Vue({
	el: '#app',
	template: '<router-view></router-view>',
	router: router
});