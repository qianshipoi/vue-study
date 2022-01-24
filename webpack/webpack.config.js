//这是一个webpack的配置文件
const path = require('path')

//启用热更新第二步
const webpack = require('webpack')

//导入在内存中生成 html 页面的插件
const htmlWebpackPlugin = require('html-webpack-plugin')

//这个配置文件就是一个 js 文件
module.exports = {
    //在配置文件中,指定 webpack 的入口和出口
    //entry 指定入口文件配置
    entry:path.join(__dirname,'./src/main.js'), //入口，webpack 要打包的文件路径
    //output 指定输出文件配置
    output:{
        path:path.join(__dirname,'./dist/') ,    //出口，webpack 要输出的目录
        filename:'bundle.js'    //指定要输出的文件名
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},  //配置处理 .css 文件的第三方loader规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|jpeg|gif|bmp)$/,use:'url-loader?limit=1024&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
        ]
    },
    plugins:[    //配置插件节点
        new htmlWebpackPlugin({ //创建一个在内存中生成 html 页面的插件
            template:path.join(__dirname,'./src/index.html'),    //指定要生成的模板页面
            filename:'index.html'       //生成之后文件的名称 名称可以随意指定不需要跟源文件名称相同。
        })
    ]
}