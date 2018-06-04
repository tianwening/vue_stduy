<template>
    <div>
       <span>{{text|myFilter}}</span> 
    </div>
</template>
<script>
	export default {
		data(){
			return {
				text: '你好吗'
			}
		},
		filters: {
			'myFilter': function(value){
				return 123;
			}
		}
	}
</script>
<style>

</style>