import Vue from 'vue'

//1、导入 vue-router 路由 终端 cnpm i vue-router -s
import VueRouter from 'vue-router'

import app from './App.vue'

//2、手动安装 VueRouter 
Vue.use(VueRouter)

//道路路由模块
import router from './router.js'


var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router//4、将路由对象挂载到 vm 实例上
})