<!-- vue中组件的相关部分 -->
<!-- html部分 -->
<template>
	<!-- vue2.x之后只允许一个div -->
	<div>
		<div class="h">头部</div>
		<router-view class="b"></router-view>
		<div class="f">底部</div>
	</div>
</template>
<!-- javascript脚本部分 -->
<script>
	
</script>
<!-- 相关层叠样式表部分 -->
<style scoped>
	.h {
		height: 100px;
		background-color: yellowgreen;
	}
	.b {
		height: 100px;
		background-color: skyblue;
	}
	.f {
		height: 100px;
		background-color: hotpink;
	}
</style>