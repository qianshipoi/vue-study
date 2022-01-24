1.处理 js 文件的互相依赖关系，将他们打包成一个 js 文件。
2.能够处理 js 的兼容问题，把浏览器不识别的语法，转为浏览器能够识别的语法。

初始化项目：终端 npm init -y

运行命令格式 ：webpack 要打包的文件路径 输出的文件路径。
使用配置文件打包：
    //这是一个webpack的配置文件
    const path = require('path')
    //这个配置文件就是一个 js 文件
    module.exports = {
        //在配置文件中,指定 webpack 的入口和出口
        //entry 指定入口文件配置
        entry:path.join(__dirname,'./src/main.js'), //入口，webpack 要打包的文件路径
        //output 指定输出文件配置
        output:{
            path:path.join(__dirname,'./dist/') ,    //出口，webpack 要输出的目录
            filename:'bundle.js'    //指定要输出的文件名
        }
    }
调用时在终端输入 webpack 直接打包。

将 bundle.js 托管到内存中
使用 npm i webpack-dev-server 在本地安装此工具可以方便查看代码更改后的页面效果，用法与 webpack 完全一样。
使用时要在 package.json 文件内 scripts 节点内 添加 "dev": "webpack-dev-server" 。在使用之前需要在项目本地装 webpack 工具。命令：npm i webpack -D 在本地安装。 运行命令： npm run dev 。项目默认挂载：http://localhost:8080 ，输出的js文件绑定在根目录(在电脑内存中)，所以需要修改srcipt引用路径。
webpack-dev-server 会监听数据是否改变(ctrl+s保存时)，改变会重新编译输出。
ctrl+c:终止批处理操作

"dev": "webpack-dev-server --open --port 3000 --contentBase src --hot" 
    --open 命令：在每次调用 npm run dev 时自动打开网页。
    --port 命令：指定端口号。
    --contentBase 命令：指定显示的页面。
    --hot 命令：热加载，在修改文件之后不会重新打包整个文件，值修改局部代码。在设置css样式时做到页面无刷新更改样式。 

将 html 托管到内存中
    1.终端：cnpm i html-webpack-plugin -D
    2.webpack.config.js 配置文件 添加 const htmlWebpackPlugin = require('html-webpack-plugin') 在module.exports = {} 配置节点内添加 plugins 节点，创建一个在内存中生成 html 页面的插件 new htmlWebpackPlugin({template:path.join(__dirname,'./src/index.html'),filename:'index.html' }) 
    注意：参数1 ：指定要生成的模板页面。 参数2：生成之后文件的名称 名称可以随意指定不需要跟源文件名称相同。

webpack 默认只能打包处理 js 文件，无法处理非 js 文件。
在 ming.js 中导入 .css 文件。
    1. 终端 cnpm i style-loader css-loader -D 项目中安装
    2. 在 webpack.config.js 配置文件新增一个 module 节点。他是一个对象，这个对象上有个 rules 属性，这个rules属性是个数组，存放了第三方文件的匹配和处理规则 
        module:{
            rules:[
                {test:/\.css$/,use:['style-loader','css-loader']},  //配置处理 .css 文件的第三方loader规则
            ]
        }
在 ming.js 中导入 .less 文件。
    1.终端 cnpm i less-loader -D 安装完成之后 cnpm i less -D
    2.配置第三方文件匹配和处理规则。{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
在 ming.js 中导入 .scss 文件。
    1.终端 cnpm i sass-loader -D 安装完成之后 cnpm i node-sass -D
    2.配置第三方文件匹配和处理规则。{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
同样也处理不了 样式文件中 url 引入的文件。
    解决办法：
        1.终端 cnpm i url-loader -D 安装完成之后 cnpm i file-loader -D
        2.配置第三方文件匹配和处理规则。{test:/\.(jpg|png|jpeg|gif|bmp)$/,use:'url-loader?limit=1024&name=[hash:8]-[name].[ext]'},
        3.处理字体文件 leader 
    注意：url-loader 默认会将图片转为 Base64 编码，limit 表示只转换小于给定值的图片。 图片名称默认会被转为 哈希数32位，name 表示显示的名称，[name]表示图片原名称，[hash:8] 表示哈希数，':8' 表示取前8位，最多32位，[ext]表示原文件后缀。如果图片重名路径不重复，使用 webpack 打包回覆盖图片，最好加上 哈希数 进行重命名。
    
webpack 处理第三方文件类型的过程：
    1.发现这个文件不是 js 文件，去配置文件中查找有没有对应的得三方 loader 规则。
    2.如果找到对应规则，对调用 loader 处理这种文件。
    3.在调用 第三方 loader 时，是从后往前掉用。当前端一个 loader 调用完毕，会把处理结果直接交给 webpack 进行打包处理输出到 bundle.js 中去。

//包的查找规则：
// 1、在项目根目录中查找 node_modules 文件夹 
// 2、在 node_modules 文件夹中，根据包名找到对应的文件夹
// 3、在文件夹中找到一个叫 package.json 的包配置文件
// 4、在 package.json 配置文件中，查找一个 main 属性，main 指定了这个包被加载入口文件