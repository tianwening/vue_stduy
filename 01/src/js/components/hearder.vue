<template>
    <div>
        我是头部
        <button v-on:click="callDaddy">儿子给爸爸返回相关信息</button>
        
    </div>
</template>
<script>
	import connector from '../connector.js';

	export default {
		methods: {
			callDaddy(){
				connector.$emit('phone','还有几分到达');
			}
		}
	}
</script>
<style scoped>
	div {
	    height: 100px;
	    background-color: pink;
	}
</style>