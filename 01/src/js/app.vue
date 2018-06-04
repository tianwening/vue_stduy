<!-- template、script和style -->
<template>
    <!-- vue2.x以后的版本只能指定一个根目录 -->
    <div>
        <header-vue></header-vue>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f3b6084e3fb0439b2e58b71406c45ceee34ed06d
        <span v-bind:value="text">{{text}}</span>
        <button v-on:click="listen">爸爸听电话</button>
        <button @click="removePhone">移除phone事件</button>
    </div>
</template>
<script>
//子组件
import connector from './connector.js';
export default {
    data(){
        return {
            text: '我很好'
=======
<<<<<<< HEAD
>>>>>>> f3b6084e3fb0439b2e58b71406c45ceee34ed06d
=======
>>>>>>> f3b6084e3fb0439b2e58b71406c45ceee34ed06d
        <button v-on:click="listen">爸爸焦急的听电话</button>
    </div>
</template>
<script>

import connector from './connector.js';

export default {

    data() {
        return {
            
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fbfdf6a3b51f771c303ba1f2f940d1cf0ceb7552
>>>>>>> f3b6084e3fb0439b2e58b71406c45ceee34ed06d
=======
>>>>>>> fbfdf6a3b51f771c303ba1f2f940d1cf0ceb7552
>>>>>>> f3b6084e3fb0439b2e58b71406c45ceee34ed06d
        }
    },
    methods: {
        listen(){
            connector.$on('phone',function(msg){
                console.log(msg);
<<<<<<< HEAD
<<<<<<< HEAD
            });
=======
<<<<<<< HEAD
=======
>>>>>>> f3b6084e3fb0439b2e58b71406c45ceee34ed06d
            })
        },
        removePhone(){
            connector.$off('phone');
=======
            });
>>>>>>> fbfdf6a3b51f771c303ba1f2f940d1cf0ceb7552
<<<<<<< HEAD
>>>>>>> f3b6084e3fb0439b2e58b71406c45ceee34ed06d
=======
>>>>>>> f3b6084e3fb0439b2e58b71406c45ceee34ed06d
        }
    }
}
</script>
<style>
</style>