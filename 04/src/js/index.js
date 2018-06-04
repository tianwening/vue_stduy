//引入一堆
import Vue from 'vue';
import VueRouter from 'vue-router';

//主体
import App from './app.vue';
import Home from './components/home.vue'

//安装插件
Vue.use(VueRouter); //挂载属性

let router = new VueRouter({
	routes: [
		{
			path: '/home',
			component: Home
		}
	]
})

//new Vue 启动
new Vue({
    el: '#app',
    //让vue知道我们的路由规则
    router: router, //可以简写router
    render: function(c){
    	return c(App)
    }
})