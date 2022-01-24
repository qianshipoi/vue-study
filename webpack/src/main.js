// 项目js入口文件
 // 1、导入 juqery 
 //import *** from ***  ES6中导入模块的方式
 // 浏览器 暂时识别不了 ES6 代码 
 import $ from 'jquery'
 // 浏览器也不支持 require 语法
 //const $ = require('jquery')

 //使用import 语法 导入css样式文件
 import './css/index.css'
 import './css/index.less'
 import './css/index.scss'
 import 'bootstrap/dist/css/bootstrap.css'

 // webpack 默认只能打包处理 js 文件，无法处理非 js 文件
 // 如果需要处理非 js 文件，则需要安装合适的第三方 loader 加载器。
 // 1. 终端 cnpm i style-loader css-loader -D 项目中安装
 // 2. 在 webpack.config.js 配置文件新增一个 module 节点。他是一个对象，这个对象上有个 rules 属性，这个rules属性是个数组，存放了第三方文件的匹配和处理规则

 //使用 webpack 处理浏览器识别不了的资源
 // 终端 项目地址-->输入 webpack ./src/main.js(要处理的文件路径) .dist/bundle.js(处理之后的文件存放路径)

 $(function(){
     $('li:odd').css('backgroundColor','blue')

     $('li:even').css('backgroundColor',function(){
         return '#999';
     })
 })