<!-- html部分 -->
<template>
	<div>
		<div class="h">顶部</div>
		<!-- 填坑 -->
		<router-view class="b"></router-view>
		<div class="f">底部</div>
	</div>
</template>
<!-- javascript脚本部分 -->
<script>
	export default {
		data(){
			return {

			}
		}
	}
</script>
<!-- 相关层叠样式表部分 -->
<style scoped>
	div {
		height: 100px;
	}
	.h {
		background-color: yellowgreen;
	}
	.b {
		background-color: skyblue;
	} 
	.f {
		background-color: hotpink;
	}
</style>