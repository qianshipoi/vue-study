//路由实例
import VueRouter from 'vue-router'

//导入登录组件
import login from './components/Login.vue'
import home from './components/Home.vue'
import welcome from './components/Welcome.vue'
import shangpin from './components/Shangpin.vue'





const router = new VueRouter({
    routes:[
        {path:'/', redirect:'/login'},
        {path:'/login',component:login},
        {path:'/home',component:home,redirect:'/welcome',children:[
            {path:'/welcome',component:welcome},
            {path:'/shangpin',component:shangpin}
        ]}
    ]
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
    //to 将要访问的路径
    //from 代表从哪个页面跳转来的
    //next 是一个函数 表示放行  next() 放行 next('/login') 强制跳转
    if(to.path === '/login') return next()
    const tokenstr = window.sessionStorage.getItem('token')
    if(!tokenstr) return next('/login')
    next()  //放行
})

export default router