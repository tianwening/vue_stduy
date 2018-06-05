<!-- html部分 -->
<template>
	<div>
		<ul>
			<li v-for="(hero,index) in heros" :key="index">
				{{hero.name}}
				<!-- //用query或者是params传递路由里面的参数 -->
				<!-- <router-link :to="{name:'detail',query:{id:index}}">查看详情</router-link> -->
				<router-link :to="{name:'detail',params:{id:index}}">查看详情</router-link>
			</li>
		</ul>
	</div>
</template>
<!-- javascript脚本部分 -->
<script>
	export default {
		data(){
			return {
				heros: [
					{name: '战狼'},
					{name: '钢铁侠'}
				]
			}	
		}
	}
</script>
<!-- 相关层叠样式表部分 -->
<style>
	
</style>