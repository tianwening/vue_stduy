<!-- html部分 -->
<template>
	<div>
		这是音乐
		<button @click="goMovie">跳转到电影</button>
		<button @click="goBack">跳转上一页</button>
	</div>
</template>
<!-- javascript脚本部分 -->
<script>
	export default {
		data(){
			return {
				
			}	
		},
		methods: {
			goMovie(){
				this.$router.push('movie');
			},
			goBack(){
				//-1代表上一次的浏览器记录
				this.$router.go(-1);
			}
		}
	}
</script>
<!-- 相关层叠样式表部分 -->
<style>
	
</style>