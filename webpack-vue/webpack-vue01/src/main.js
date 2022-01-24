//js入口文件

//在 webpack 中使用 Vue
//这种方式获取到的 Vue 是 vue.runtime.commom.js 不是一个完整的 vue 包
//解决方法1.修改包中 mian 属性的值，改为 dist/vue.js
//import Vue from 'vue'
//解决方法2.直接使用路径导入
// import Vue from '../node_modules/vue/dist/vue.js'
//解决方法3.在 webpack.config.js 配置文件中，module.exports = {} 配置文件内 添加 resolve 节点
//在 resolve 节点内 添加 alias 节点 
//在 alias 节点下 修改 vue 被导入时包的路径 'vue$':'vue/dist/vue.js'
import Vue from 'vue'

//包的查找规则：
// 1、在项目根目录中查找 node_modules 文件夹 
// 2、在 node_modules 文件夹中，根据包名找到对应的文件夹
// 3、在文件夹中找到一个叫 package.json 的包配置文件
// 4、在 package.json 配置文件中，查找一个 main 属性，main 指定了这个包被加载入口文件

//网页原始方法
// var login = {
//     template:'<h1>这是一个使用网页中形式添加的login组件</h1>'
// }

//在 vue runtime.only 下引入组件
//1、新建 .vue 组件文件 文件中创建三个标签 <template></template><style></style><script></script>
//2、导入 .vue 组件文件
import login,{name,content as c} from './login.vue'
//3、导入 cnpm i vue-loader vue-template-compiler -D 在项目中安装第三方 loader 处理 .vue 文件
//4、在 webpack.config.js 配置文件中：module.exports内 --> module --> rules 中 配置 {test:/\.vue$/,use:'vue-loader'},

// ES6 导入模块 import 变量 from '模块路径'
// ES6 向外暴露成员 export default  可以任意明命名
// export 向外暴露的成员还能使用 {} 来接收 必须以名称来接收 通过 as 新名称 来重新命名
console.log(name+"-"+c)



var vm = new Vue({
    el:'#app',
    data:{
        msg:'123'
    },
    // components:{
    //     login:login
    // }
    // render:function(createElements){
    //     return createElements(login)
    // }
    //简写 render 对应的方法 
    render: c => c(login)
})
