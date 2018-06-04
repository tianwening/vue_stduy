<!-- template、script和style -->
<template>
    <!-- vue2.x以后的版本只能指定一个根目录 -->
    <div>
        <header-vue textOne="大" v-bind:textTwo="msg"></header-vue>
        <span v-bind:value="text">{{text}}</span>
        <button v-on:click="listen">爸爸听电话</button>
        <button @click="removePhone">移除phone事件</button>
    </div>
</template>
<script>
//子组件
import connector from './connector.js';
//父组件向子组件传递数据
export default {
    data(){
        return {
            text: '我很好',
            msg: '王境泽'
        }
    },
    methods: {
        listen(){
            connector.$on('phone',function(msg){
                console.log(msg);
            })
        },
        removePhone(){
            connector.$off('phone');
        }
    }
}
</script>
<style>
</style>