<template>
    <div>
        我是头部
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f3b6084e3fb0439b2e58b71406c45ceee34ed06d
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
=======
<<<<<<< HEAD
>>>>>>> f3b6084e3fb0439b2e58b71406c45ceee34ed06d
=======
>>>>>>> f3b6084e3fb0439b2e58b71406c45ceee34ed06d
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fbfdf6a3b51f771c303ba1f2f940d1cf0ceb7552
>>>>>>> f3b6084e3fb0439b2e58b71406c45ceee34ed06d
=======
>>>>>>> fbfdf6a3b51f771c303ba1f2f940d1cf0ceb7552
>>>>>>> f3b6084e3fb0439b2e58b71406c45ceee34ed06d
</script>
<style scoped>
	div {
	    height: 100px;
	    background-color: pink;
	}
</style>