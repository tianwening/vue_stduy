import Vue from "vue";
import VueRouter from "vue-router";

//引入组件
import App from "./app.vue";
import Music from "./components/music.vue";
import Movie from "./components/movie.vue";
import headerVue from "./components/header.vue";
import footerVue from "./components/footer.vue";

// 安装vue-router插件
Vue.use(VueRouter);

Vue.component('headerVue',headerVue);
Vue.component('footerVue',footerVue);

// 创建路由对象
let router = new VueRouter({
	routes: [
		{
			path: '/',
			components: {
				header: footerVue,
				default: headerVue,
				footer: footerVue
			}
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