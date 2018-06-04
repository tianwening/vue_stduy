<!-- template、script和style -->
<template>
    <!-- vue2.x以后的版本只能指定一个根目录 -->
    <div>
        <header-vue></header-vue>
<<<<<<< HEAD
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
        <button v-on:click="listen">爸爸焦急的听电话</button>
    </div>
</template>
<script>

import connector from './connector.js';

export default {

    data() {
        return {
            
>>>>>>> fbfdf6a3b51f771c303ba1f2f940d1cf0ceb7552
        }
    },
    methods: {
        listen(){
            connector.$on('phone',function(msg){
                console.log(msg);
<<<<<<< HEAD
            })
        },
        removePhone(){
            connector.$off('phone');
=======
            });
>>>>>>> fbfdf6a3b51f771c303ba1f2f940d1cf0ceb7552
        }
    }
}
</script>
<style>
</style>