import Vue from "vue";
import VueRouter from "vue-router";

//引入组件
import App from "./app.vue";
import Home from "./components/home.vue";

// 安装vue-router插件
Vue.use(VueRouter);

// 创建路由对象
let router = new VueRouter({
	routes: [
		{
			path: '/home',
			component: Home
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