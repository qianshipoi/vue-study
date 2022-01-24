import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'
import 'element-ui/lib/theme-chalk/index.css'
import './js/emelentUI.js'
import './css/common.css'
import './css/base.css'
import './fonts/iconfont.css'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

Vue.use(VideoPlayer)


Vue.use(VueRouter)

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})