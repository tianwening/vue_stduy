<!-- template、script和style -->
<template>
    <!-- vue2.x以后的版本只能指定一个根目录 -->
    <div>
        <input type="text" name="" v-model="text">
        <sub-vue ref="sub"></sub-vue>
        <div ref="myDiv">你好吗</div>
    </div>
</template>
<script>
import Vue from 'vue';
import subVue from "./components/sub.vue";

Vue.filter('myFliter',function(value){
    return '这是全局过滤器';
})
export default {
    data(){
        return {
            text: ''
        }
    },
    components: {
        'subVue':subVue
    },
    //创建组件之后，数据已经初始化，但是DOM还未生成
    created(){
        console.log('created',this.$refs.myDiv);
    },
    //将数据装在到DOM上，数据已经就位，数据渲染到DOM结构上，DOM已经生成
    mounted(){
        console.log(this);
        console.log(this.$refs.sub);
        this.$refs.sub.$el.innerHTML = '<span>子组件对象</span>';
        // console.log('mounted',this.$refs.myDiv);
    }
}
</script>
<style>
</style>