<template>
    <div>
        我是头部
        <button v-on:click="callDaddy">打电话给爸爸</button>
    </div>
</template>
<script>
import connector from '../connector.js';
export default {
	data(){
		return {

		}
	},
	methods: {
		callDaddy(){
			connector.$emit('phone','62分钟来');
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