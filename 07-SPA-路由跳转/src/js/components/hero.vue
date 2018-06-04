<template>
	<div>
		<ul>
			<li v-for="(hero,index) in heros" :key="index">
				{{hero.name}}
				<!-- <router-link :to="{name:'detail',query:{id:index}}">查看</router-link> -->
				<router-link :to="{name:'detail1',params:{id:index}}">查看</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				heros: [
					{name: '李白'},
					{name: '白居易'}
				]
			}
		}
	}
</script>
<style>
	
</style>