// 导入相关包
import Vue from 'vue';
import VueRouter from 'vue-router';

// 导入需要用到的组件
import App from './components/app.vue';
import Home from './components/home.vue';
import NotFound from './components/notFound.vue';

// 安装路由
Vue.use(VueRouter);

//创建路由对象，配置路由规则
let router = new VueRouter({
	routes: [
		{ path: '/', redirect: {name: 'home'}},
		{ name: 'home', path: '/home', component: Home},
		{ path: '*', component: NotFound},
	]
})

// 创建Vue对象
new Vue({
	//放置的元素
	el: '#app',
	//路由规则
	router: router,
	//页面渲染函数
	render(c){
		return c(App);
	}
})