//导入相关模块
import Vue from 'vue';
import VueRouter from 'vue-router';

//导入需要的组件
import App from './app.vue';
import List from './components/list.vue';
import Detail from './components/detail.vue';

//安装插件
Vue.use(VueRouter);

//创建路由对象，配置相关的路由的规则
//query和params传递路由参数的方式有所不同,使用query时无需改动路由的path，但是params需要
let router = new VueRouter({
	//routes是一个数组，用以存放相关的路由规则对象
	routes: [
		{name: 'list',path: '/list', component: List},
		{name: 'detail',path: '/detail/:id', component: Detail}
	]
})

//创建Vue对象
new Vue({
	//将要放置的元素位置
	el: "#app",
	//索要使用的路由的规制配置对象
	router: router,
	//render渲染函数将相关组件渲染到目标位置上
	render(creator){
		//将生成的DOM对象返回
		return creator(App);
	}
})