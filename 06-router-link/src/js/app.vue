<template>
	<div>
		<div class="h">
			这是顶部
			<!-- <a href="#/music">进入音乐</a>
			<a href="#/movie">进入电影</a>
			<a href="#/music">进入音乐</a>
			<a href="#/movie">进入电影</a> -->
			<router-link :to="{name:'music'}">进入音乐</router-link>
			<router-link :to="{name:'movie'}">进入电影</router-link>
			<router-link :to="{name:'music'}">进入音乐</router-link>
			<router-link :to="{name:'movie'}">进入电影</router-link>
		</div>
		<router-view class="b"></router-view>
		<div class="f">这是底部</div>
	</div>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	div {
		height: 100px;
	}
	.h{
		background-color: yellowgreen;
	}
	.b{
		background-color: skyblue;
	}
	.f{
		background-color: hotpink;
	}
</style>