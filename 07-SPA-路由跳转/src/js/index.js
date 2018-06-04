import Vue from "vue";
import VueRouter from "vue-router";

//引入组件
import App from "./app.vue";
import Hero from "./components/hero.vue";
import Detail from "./components/detail.vue";

// 安装vue-router插件
Vue.use(VueRouter);

// 创建路由对象
let router = new VueRouter({
	routes: [
		{
			name: 'hero',
			path: '/hero',
			component: Hero
		},
		{
			name: 'detail',
			path: '/detail',
			component: Detail
		},
		{
			name: 'detail1',
			path: '/detail',
			component: Detail
		}
	]
})

new Vue({
	el: '#app',
	router: router,
	render: function(c){
		return c(App)
	}
})