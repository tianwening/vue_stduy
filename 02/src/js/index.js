import Vue from 'vue';
import App from './app.vue';

//全局组件声明
//1、先将所有需要的子组件导入
import headerVue from './components/hearder.vue';

Vue.component('headerVue',headerVue);

new Vue({
	el: '#app',
	//render是一个渲染函数，用以将vue文件生成的DOM结构渲染到指定的文件中去
	render: function(creater){
		return creater(App);
	}
})