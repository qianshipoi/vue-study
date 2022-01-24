在项目中安装 Vue 包：终端 cnpm i vue -s

在 webpack 中使用 Vue
    import Vue from 'vue'
    这种方式获取到的 Vue 是 vue.runtime.commom.js 不是一个完整的 vue 包
        解决方法1.修改包中 mian 属性的值，改为 dist/vue.js
        import Vue from 'vue'
        解决方法2.直接使用路径导入
        import Vue from '../node_modules/vue/dist/vue.js'
        解决方法3.在 webpack.config.js 配置文件中，module.exports = {} 配置文件内 添加 resolve 节点
        在 resolve 节点内 添加 alias 节点 
        在 alias 节点下 修改 vue 被导入时包的路径 'vue$':'vue/dist/vue.js'
        import Vue from 'vue'

//包的查找规则：
// 1、在项目根目录中查找 node_modules 文件夹 
// 2、在 node_modules 文件夹中，根据包名找到对应的文件夹
// 3、在文件夹中找到一个叫 package.json 的包配置文件
// 4、在 package.json 配置文件中，查找一个 main 属性，main 指定了这个包被加载入口文件


使用 vue.runtime.only 处理vue组件
    //1、新建 .vue 组件文件 文件中创建三个标签 <template></template><style></style><script></script> 组件文件写在 template 标签中
    //2、导入 .vue 组件文件
    import login from './login.vue'
    //3、导入 cnpm i vue-loader vue-template-compiler -D 在项目中安装第三方 loader 处理 .vue 文件
    //4、在 webpack.config.js 配置文件中：module.exports内 --> module --> rules 对象中 配置 {test:/\.vue$/,use:'vue-loader'},
    //5、在 webpack.config.js 配置文件中 添加 const VueLoaderPlugin = require('vue-loader/lib/plugin'); module.exports内 --> plugins 数组中 配置 new VueLoaderPlugin()

使用 vue.runtime.only 处理vue-router路由组件
    //1、导入 vue-router 路由 终端 cnpm i vue-router -s
    import VueRouter from 'vue-router'
    //2、手动安装 VueRouter 
    Vue.use(VueRouter)
    //3、创建路由对象
    var router = new VueRouter({
        routes:[
            {path:'/account',component:account},
            {path:'/goodslist',component:goodslist},
        ]
    })
    router:router//4、将路由对象挂载到 vm 实例上
    注意：使用 render 渲染的组件会覆盖整个 app DOM元素。路由标签应放在渲染的组件内(将路由要渲染的标签放到 render 渲染的组件内)。
    子组件：{path:'/account',component:account,children:[
                {path:'login',component:login},
                {path:'reg',component:reg}
            ]},
    注意：子组件的 router-link 和 router-view 要定义在自定父组件内。path 前不要加' / '
    
在 .vue 文件中 style 中的样式默认为全局样式，使用 scoped 属性可以使样式只在该组件内生效，style 的默认语言为 css 通过 lang 属性可以指定语言。

将 路由 模块封装成 js 文件
    在 js 文件中处理路由，再用 export default 将路由暴露出去
    在 main.js 中使用 import 导入路由模块




