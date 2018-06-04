import Vue from "vue";
import VueRouter from "vue-router";

//引入组件
import App from "./app.vue";
import Music from "./components/music.vue";
import Movie from "./components/movie.vue";

// 安装vue-router插件
Vue.use(VueRouter);

// 创建路由对象
let router = new VueRouter({
	routes: [
		{
			name: 'music',
			path: '/myMusic',
			component: Music
		},
		{
			name: 'movie',
			path: '/movie',
			component: Movie
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