import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'
// import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './js/elementUI.js'

//导入全局样式文件
import './css/global.css'
//导入字体图标文件
import './css/fonts/iconfont.css'

import axios from 'axios'
//配置请求根目录
axios.defaults.baseURL='http://localhost:36526/api/'
axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
//设置请求头
axios.interceptors.request.use(config => {
    // config.headers.Authorization = 'bearer '+window.sessionStorage.getItem('token')
    config.headers.Token = window.sessionStorage.getItem('token')
    return config
})
Vue.prototype.$http = axios //全局可用 this 调用



Vue.use(VueRouter)
// Vue.use(elementUI)

var vn = new Vue({
    el:"#app",
    render: c => c(app),
    router
})
