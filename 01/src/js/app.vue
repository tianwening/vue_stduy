<!-- template、script和style -->
<template>
    <!-- vue2.x以后的版本只能指定一个根目录 -->
    <div>
        <header-vue></header-vue>
        <button v-on:click="listen">爸爸焦急的听电话</button>
    </div>
</template>
<script>

import connector from './connector.js';

export default {

    data() {
        return {
            
        }
    },
    methods: {
        listen(){
            connector.$on('phone',function(msg){
                console.log(msg);
            });
        }
    }
}
</script>
<style>
</style>