//处理路由
import VueRouter from 'vue-router'

//导入 vue 组件
import account from './main/account.vue'
import goodslist from './main/goodslist.vue'

import login from './subcom/Login.vue'
import reg from './subcom/Reg.vue'

//3、创建路由对象
var router = new VueRouter({
    routes:[
        {path:'/account',component:account,children:[
            {path:'login',component:login},
            {path:'reg',component:reg}
        ]},
        {path:'/goodslist',component:goodslist},
    ]
})

//使用 export default 将路由对象暴露出去
export default router