<template>
    <div class="main">
        <div class="w">
            <!-- 闪购 -->
            <div class="shangou">
                <!-- 闪购标题 -->
                <h2 class="title">小米闪购</h2>
                <!-- 左右按钮 -->
                <div class="toggle">
                    <span @click="pren()"><i class="iconfont">&#xe659;</i></span><span @click="next()" ><i class="iconfont">&#xe65b;</i></span>
                </div>
                <div class="shangou_main clearfix">
                    <!-- 闪购左 -->
                    <div class="shangou_main_l shangou_box fl ">
                        <div>10:00 场</div>
                        <div class="icon"><i class="iconfont">&#xe60f;</i></div>
                        <div class="outtxt">距离结束还有</div>
                        <div class="timeout">
                            <span>00</span>:<span>00</span>:<span>00</span>
                        </div>
                    </div>
                    <!-- 闪购右 -->
                    <div class="shangou_main_r fr ">
                        <ul class="clearfix" ref="shangouUl">
                            <li v-for="item in shangouList" :key="item.id">
                                <a :href="item.href" class="shangou_box">
                                    <img :src="item.src"/>
                                    <h3>{{item.title}}</h3>
                                    <p class="desc">{{item.desc}}</p>
                                    <p class="price"><span>{{item.spike}}</span>元 <del>{{item.oldprice}}元</del></p>
                                </a>
                            </li>
                       </ul>
                    </div>
                    <!-- 闪购底部图片 -->
                    <div class="footerImg fl">
                        
                      <a href="javascript:;">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/731d72805fb720532079afd58645f6b9.jpg?thumb=1&w=1226&h=120&f=webp&q=90">
                        </a>
                    </div>
                </div>
            </div>
            <!-- 手机 -->
            <div class="shouji">
                <!-- 标题 -->
                <h2 class="title">手机</h2>
                <!-- 查看全部 -->
                <div class="selectAll">
                    <a href="javascript:;">查看全部<i class="iconfont">&#xe507;</i></a>
                </div>
                <!-- 内容部分 -->
                <div class="shouji_main clearfix">
                    <div class="shouji_box shouji_main_l fl">
                        <a href="javascript:;">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90" alt="">
                        </a>
                    </div>
                    <div class="shouji_main_r fr">
                        <ul class="clearfix">
                            <li class="shouji_box fl" v-for="item in shoujiList" :key="item.id">
                                <a :href="item.href">
                                    <img :src="item.src">
                                    <h3>{{item.title}}</h3>
                                    <p class="desc">{{item.desc}}</p>
                                    <p class="price"><span>{{item.spike}}元起</span><del v-if="item.oldprice">{{item.oldprice}}元</del></p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 图片 -->
                  <div class="footerImg">
                      <a href="javascript:;">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3e63ab43e7c32296f18f34c8efb41534.jpg?thumb=1&w=1226&h=120&f=webp&q=90">
                        </a>
                    </div>  
            </div>
            <!-- 家电 -->
            <div class="jiadian">
                <!-- 标题 -->
                <h2 class="title">家电</h2>
                <!-- 类别 -->
                <div class="goods_type">
                    <ul>
                        <li><a href="javascript:;" :class="jiadianSel=='hot'?'goods_type_active':''"  @mouseover.prevent="jiadian_hot_over">热门</a></li>
                        <li><a href="javascript:;" :class="jiadianSel=='dvd'?'goods_type_active':''"   @mouseover.prevent="jiadian_dvd_over">影音电视</a></li>
                    </ul>
                </div>
                <!-- 内容部分 -->
                <div class="jiadian_main clearfix">
                    <div class="jiadian_box jiadian_main_l fl">
                        <ul>
                            <li>
                                <a href="javascript:;" class="shouji_box">
                                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b56fd90a60e3d9e5d87dae9fbd427ea8.jpg">
                                </a>
                            </li>
                            <li><a href="javascript:;" class="shouji_box">
                                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b67de5a8ce9025fb5d8bac66e019d1c3.jpg">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="jiadian_main_r fr">
                        <ul class="clearfix">
                            <li class="shouji_box fl" v-for="item in jiadianList" :key="item.id">
                                <a v-if="item.id!=8" :href="item.href">
                                    <img :src="item.src">
                                    <h3>{{item.title}}</h3>
                                    <p class="desc">{{item.desc}}</p>
                                    <p class="price"><span>{{item.spike}}元起</span><del v-if="item.oldprice">{{item.oldprice}}元</del></p>
                                </a>
                                <a v-else :href="item.href" class="lastBox">
                                    <div class="lastBox_l">
                                        <h3>{{item.title}}</h3>
                                        <p class="price"><span>{{item.spike}}元起</span><del v-if="item.oldprice">{{item.oldprice}}元</del></p>
                                    </div>
                                    <img :src="item.src">
                                </a>
                            </li>
                            <li class="shouji_box fl">
                                <a :href="jiadianMore.href" class="moreBox">
                                    <div class="moreContent">
                                        <p>浏览更多</p>
                                        <small>{{jiadianMore.content}}</small>
                                    </div>
                                    <i class="iconfont">&#xe50c;</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 图片 -->
                  <div class="footerImg">
                      <a href="javascript:;">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e8fc8ba9718c266882719fb4bbcedd.jpg?thumb=1&w=1226&h=120&f=webp&q=90">
                        </a>
                    </div>  
            </div>
            <!-- 视屏 -->
            <div class="shipin">
                <!-- 标题 -->
                <h2 class="title">视频</h2>
                <!-- 查看全部 -->
                <div class="selectAll">
                    <a href="javascript:;">查看全部<i class="iconfont">&#xe507;</i></a>
                </div>
                <!-- 内容部分 -->
                <div class="shipin_main">
                    <ul>
                        <li v-for="item in shanpinList" :key="item.id" @mouseover="videoLiOver($event)" @mouseleave="videoLiLeave($event)" @click="showVideo(item.id)">
                            <a href="javascript:;">
                                <img :src="item.src">
                                <div class='playicon'>
                                    <i class="iconfont">&#xe646;</i>
                                </div>
                                <h3>{{item.title}}</h3>
                                <p class="desc">{{item.desc}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- 弹出层 -->
                <transition @enter="videoDiaEnter($event)" @leave="videoDiaLeave($event)" @before-enter="videoDiaBeforeEnter($event)">
                <div class="videoDialog" v-if="VideoDialog">
                    <div class="dialog_header">
                        <span class="dialog_title">{{videoInfo.title}}</span>
                        <span class="dialog_colse iconfont" @click="closeVideo()" title="关闭">&#xe6a1;</span>
                    </div>
                    <div class="dialog_main">
                        <div class='demo'>
                            <video-player class="video-player vjs-custom-skin"
                                        ref="videoPlayer"
                                        :playsinline="true"
                                        :options="playerOptions">
                            </video-player>
                        </div>
                    </div>
                </div>
                </transition>
                <!-- 遮罩层 -->
                <div class="videoZheZhaoCeng" v-show="VideoDialog"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){return{
        shangouList:[
            {id:1,src:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1571038766.41824452.jpg?thumb=1&w=200&h=200',href:'javascript:;',title:'MIJOY 抽纸青春版 24包/箱',desc:'精选原生竹浆，健康环保',spike:'27.9',oldprice:'32.9'},
            {id:2,src:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1524452958.92865446.jpg?thumb=1&w=200&h=200',href:'javascript:;',title:'飞利浦智睿筒灯 可调色温版 白色',desc:'冷暖随心调',spike:'29.9',oldprice:'59'},
            {id:3,src:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1571660595.33144009.jpg?thumb=1&w=200&h=200',href:'javascript:;',title:'米家魔方转换器 有线版',desc:'方寸之间,能量无限',spike:'59',oldprice:'69'},
            {id:4,src:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1552372948.24196473.jpg?thumb=1&w=200&h=200',href:'javascript:;',title:'小米移动电源3 10000mAh USB-C双向快充版 银色',desc:'双向18W快充 / 输入输出双接口 / 可上飞机，安全贴心',spike:'99',oldprice:'129'},

            {id:5,src:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1538028933.22379526.jpg?thumb=1&w=200&h=200',href:'javascript:;',title:'米家自动洗手机套装 白色',desc:'伸手出泡，抑菌有效',spike:'69',oldprice:'79'},
            {id:6,src:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1552868299.27348967.jpg?thumb=1&w=200&h=200',href:'javascript:;',title:'Redmi全自动波轮洗衣机 1A 8kg 白色',desc:'一键操作，父母都爱用',spike:'799',oldprice:'899'},
            {id:7,src:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/10f2e26c-2897-bf5e-435e-d569956a480c.png?thumb=1&w=200&h=200',href:'javascript:;',title:'Free Tie真皮板鞋 米家定制 男款 黑色 42',desc:'做一双简单的板鞋',spike:'99.5',oldprice:'199'},
            {id:8,src:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1554003519.38642131.jpg?thumb=1&w=200&h=200',href:'javascript:;',title:'米家多功能电煮壶 白色',desc:'汤羹粥茶 精煮慢炖',spike:'299',oldprice:'399'},

            {id:9,src:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/65002df8-d241-5fb9-7ced-f2f07ecfb1fa.jpg?thumb=1&w=200&h=200',href:'javascript:;',title:'飞利浦智睿球泡灯 白色',desc:'居家办公，光线随心调节',spike:'19.8',oldprice:'49'},
            {id:10,src:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1570623930.25886181.jpg?thumb=1&w=200&h=200',href:'javascript:;',title:'米家两门冰箱 160L 银色',desc:'小巧能装，速冻养鲜',spike:'899',oldprice:'1099'},
            {id:11,src:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1552376822.09637089.jpg?thumb=1&w=200&h=200',href:'javascript:;',title:'小米路由器4A千兆版',desc:'双核全千兆AC1200路由器',spike:'129',oldprice:'169'},
            {id:12,src:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/3949e67c-406a-9ab9-5116-7fef8d9b565c.jpg?thumb=1&w=200&h=200',href:'javascript:;',title:'小米降噪耳机Type-C版 黑色',desc:'随时随地，安静聆听好声音',spike:'149',oldprice:'299'},

            {id:13,src:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1565262481.3597559.jpg?thumb=1&w=200&h=200',href:'javascript:;',title:'米家变频滚筒洗衣机1A 8kg 白色',desc:'小身材大容量，洗得净',spike:'1199',oldprice:'1299'},
            {id:14,src:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1567393585.49577260.jpg?thumb=1&w=200&h=200',href:'javascript:;',title:'小米米家智能摄像机云台版 白',desc:'高清画质，守护家的每一面',spike:'169',oldprice:'199'},
            {id:15,src:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/321610e787393c42e5cb2e5730a7681d.jpg?thumb=1&w=200&h=200',href:'javascript:;',title:'小米小爱蓝牙音箱随身版 白色',desc:'小巧便携，一键唤醒小爱',spike:'45',oldprice:'49'},
            {id:16,src:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1565614113.69785042.jpg?thumb=1&w=200&h=200',href:'javascript:;',title:'米家变频滚筒洗衣机1S 8kg 银色',desc:'超薄机身，除菌净衣',spike:'1299',oldprice:'1399'},
        ],
        shangouIndex:1,
        time:'',
        shoujiList:[
            {id:1,src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c16238f786e4f93bdb175d7bf21aa47.jpg?thumb=1&w=200&h=200&f=webp&q=90',href:'javascript:;',title:'Redmi K30',desc:'120Hz流速屏，全速热爱',spike:'1599',oldprice:''},
            {id:2,src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53641901fbc28cbcdb495b17fdf69e46.jpg?thumb=1&w=200&h=200&f=webp&q=90',href:'javascript:;',title:'Redmi K30 5G',desc:'双模5G，120Hz流速屏',spike:'1999',oldprice:''},
            {id:3,src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/07270cc09689eb9b13b29aa9f6bc41eb.jpg?thumb=1&w=200&h=200&f=webp&q=90',href:'javascript:;',title:'小米CC9 Pro',desc:'1亿像素 五摄四闪',spike:'2599',oldprice:'2799'},
            {id:4,src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d295c4fb500d163a7045dc715b47f808.jpg?thumb=1&w=200&h=200&f=webp&q=90',href:'javascript:;',title:'Redmi 8',desc:'5000mAh超长续航',spike:'699',oldprice:'799'},

            {id:5,src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c924c3f3436b6934495fd98f159ee3f7.jpg?thumb=1&w=200&h=200&f=webp&q=90',href:'javascript:;',title:'Redmi 8A',desc:'5000mAh超长续航',spike:'599',oldprice:'699'},
            {id:6,src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg?thumb=1&w=200&h=200&f=webp&q=90',href:'javascript:;',title:'Redmi Note 8 Pro',desc:'6400万全场景四摄',spike:'1199',oldprice:'1399'},
            {id:7,src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg?thumb=1&w=200&h=200&f=webp&q=90',href:'javascript:;',title:'Redmi Note 8',desc:'千元4800万四摄',spike:'899',oldprice:'999'},
            {id:8,src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg?thumb=1&w=200&h=200&f=webp&q=90',href:'javascript:;',title:'Redmi K20 Pro 尊享版',desc:'骁龙855 Plus， 弹出全面屏',spike:'2499',oldprice:'2999'},
        ],
        jiadianData:
            {hot:[
                {id:1,src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90',href:'javascript:;',title:'米家互联网空调C1（一级能效）',desc:'变频节能省电，自清洁',spike:'2599',oldprice:'2699'},
                {id:2,src:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200',href:'javascript:;',title:'米家空调',desc:'出众静音，快速制冷热',spike:'1499',oldprice:'1799'},
                {id:3,src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg?thumb=1&w=200&h=200&f=webp&q=90',href:'javascript:;',title:'米家互联网洗烘一体机 Pro 10kg',desc:'智能洗烘，省心省力',spike:'2999',oldprice:''},
                {id:4,src:'https://i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633!200x200.jpg',href:'javascript:;',title:'小米电视4A 32英寸',desc:'人工智能系统，高清液晶屏',spike:'799',oldprice:''},

                {id:5,src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=200&h=200&f=webp&q=90',href:'javascript:;',title:'Redmi全自动波轮洗衣机1A 8kg',desc:'一键操作，父母都爱用',spike:'899',oldprice:''},
                {id:6,src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=200&h=200&f=webp&q=90',href:'javascript:;',title:'小米全面屏电视E55A',desc:'全面屏设计，人工智能语音',spike:'1899',oldprice:'2099'},
                {id:7,src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd2aa2dcad6440b469c22e27db9b6236.jpg?thumb=1&w=200&h=200&f=webp&q=90',href:'javascript:;',title:'15.6" 四核i7 16G 独显 512G',desc:'全面均衡的国民轻薄本',spike:'4899',oldprice:''},
                
            ],dvd:[
                {id:1,src:'https://i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633!200x200.jpg',href:'javascript:;',title:'小米电视4A 32英寸',desc:'人工智能系统，高清液晶屏',spike:'799',oldprice:''},
                {id:2,src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=200&h=200&f=webp&q=90',href:'javascript:;',title:'小米全面屏电视E55A',desc:'全面屏设计，人工智能语音',spike:'1899',oldprice:'2099'},
                {id:3,src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3317a291b112aa4712059ad93263668.jpg?thumb=1&w=200&h=200&f=webp&q=90',href:'javascript:;',title:'小米全面屏电视E65A',desc:'全面屏设计，人工智能语音',spike:'2799',oldprice:'3999'},
                {id:4,src:'https://i8.mifile.cn/b2c-mimall-media/ede227c1f0e3472fb8dcfae980d1e43f!200x200.jpg',href:'javascript:;',title:'小米电视4X 43英寸',desc:'FHD全高清屏，人工智能语音',spike:'1199',oldprice:'1499'},

                {id:5,src:'https://i8.mifile.cn/v1/a1/cef8a9c0-2386-5b66-9ed2-6b1d4e4490bf!200x200.jpg',href:'javascript:;',title:'小米电视4C 55英寸',desc:'4K HDR，人工智能系统',spike:'1799',oldprice:'1999'},
                {id:6,src:'https://i8.mifile.cn/b2c-mimall-media/91b59cc6474e0cd777445b15adb13980!200x200.jpg',href:'javascript:;',title:'小米电视4A 65英寸',desc:'4K HDR，人工智能语音系统',spike:'2799',oldprice:'2999'},
                {id:7,src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e7eee530e4a103f2f5a0937a14bed53.jpg?thumb=1&w=200&h=200&f=webp&q=90',href:'javascript:;',title:'小米壁画电视 65英寸',desc:'壁画外观，全面屏，远场语音',spike:'6999',oldprice:''},
                {id:8,src:'https://i8.mifile.cn/b2c-mimall-media/aa8a6ce3b2b1201d74d0197482f3403b!100x100.jpg',href:'javascript:;',title:'小米盒子4',desc:'',spike:'299',oldprice:''},
            ]},
        jiadianList:[],
        jiadianSel:'hot',
        jiadianMore:{href:'javascript:;',content:'热门'},
        shanpinList:[
            {id:'1',src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4004fc968de331f702585d58b15aba2.jpg?thumb=1&w=296&h=180&f=webp&q=90',video:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7f49c1ccd75f76ec86b52c9ae4c4a082.mp4',title:'小米MIX Alpha 开箱视频',desc:''},
            {id:'2',src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/395fdedf0f40206032397e33beed756e.jpg?thumb=1&w=296&h=180&f=webp&q=90',video:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1443581f88b733750c7763b2b3d67c52.mp4',title:'小米5G新品手机发布会',desc:''},
            {id:'3',src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3a134c9f8fffb85a47ac397e7eeba7e8.jpg?thumb=1&w=296&h=180&f=webp&q=90',video:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/df3dc1da003b7db992e902f653326476.mp4',title:'Redmi Note 8 系列发布会',desc:''},
            {id:'4',src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9c37f64bada7b0b2758f50e50077fe6c.jpg?thumb=1&w=296&h=180&f=webp&q=90',video:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/efea1979661bac0d1704d761e5e89ded.mp4',title:'小米电视5 创新背后的故事',desc:''},
        ],
        videoInfo:{title:'',videoSrc:'',imgSrc:''},
        VideoDialog:false,
          playerOptions: {
                    playbackRates: [0.5, 1.0, 1.5, 2.0], 
                    autoplay: false, 
                    muted: false, 
                    loop: false, 
                    preload: 'auto', 
                    language: 'zh-CN',
                    aspectRatio: '16:9',
                    fluid: true,
                    sources: [{
                        type: "video/mp4",
                        src: '' 
                    }],
                    poster: '', 
                    notSupportedMessage: '此视频暂无法播放，请稍后再试',
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true  
                    }
                },
    }},
    methods:{
        pren(){
            clearInterval(this.timer);
            if(this.shangouIndex-1 != 0)
                this.shangouIndex -= 1
            this.timer = setInterval(this.shangouAuto, 7000);
        },
        next(){
            clearInterval(this.timer);
            if(this.shangouIndex+1 <= this.shangouList.length /4)
                this.shangouIndex += 1
            this.timer = setInterval(this.shangouAuto, 7000);
        },
        shangouAuto(){
            if(this.shangouIndex+1 > this.shangouList.length /4)
                this.shangouIndex = 1;
            else    
                this.shangouIndex++;
        },
        jiadian_hot_over(){
            this.jiadianList = this.jiadianData.hot;
            this.jiadianSel = 'hot';
            this.jiadianMore = {href:'javascript:;',content:'热门'}
        },
        jiadian_dvd_over(){ 
            this.jiadianList = this.jiadianData.dvd;
            this.jiadianSel = 'dvd';
            this.jiadianMore = {href:'javascript:;',content:'电视影音'}
        },
        videoLiOver(el){
            var iconElement = el.currentTarget.getElementsByClassName('playicon')[0]
            iconElement.style.backgroundColor="#FF6700";
            iconElement.style.transition = "all .5s ease"
        },
        videoLiLeave(el){
            var iconElement = el.currentTarget.getElementsByClassName('playicon')[0]
            iconElement.style.backgroundColor="transparent";
            iconElement.style.transition = "all .5s ease"
        },
        showVideo(obj){
            this.VideoDialog = true;
            var videoInfo = this.shanpinList.find(item => item.id == obj);
            this.videoInfo.title = videoInfo.title;
            this.playerOptions.sources[0].src = videoInfo.video;
            this.playerOptions.poster =  videoInfo.src;
        },
        closeVideo(){
            this.VideoDialog = false;
            this.videoInfo.title ='';
             this.playerOptions.sources[0].src = '';
            this.playerOptions.poster =  '';
        },
        videoDiaEnter(el){
            el.offsetWidth;
            el.style.height = "100%";
            el.style.transition = "all ease 1s ";
        },
        videoDiaBeforeEnter(el){
            el.style.height = "60px";
            el.style.opacity = "1";
        },
        videoDiaLeave(el){
            el.style.transition = "all ease 1ms ";
            el.style.opacity = "0";
        }
        
    },
    mounted(){
      this.timer = setInterval(this.shangouAuto, 7000);
      this.jiadianList = this.jiadianData.hot;
      this.jiadianSel = 'hot';
    },
    watch:{
        'shangouIndex':function(newValue,oldValue){
            var sgul = this.$refs.shangouUl;
            let w = 992;
            sgul.style.left = "-"+ w*(this.shangouIndex-1)+"px";
            sgul.style.transition = "all 1s ease";
        }
    },
    beforeDestroy(){
      clearInterval(this.timer);
    }
}
</script>
<style scoped>
.main{
    padding: 9px;
    width: 100%;
    /* height: 6035px; */
    background-color: #F5F5F5;
    margin-bottom: 15px;
}
a:hover{
    color: #605751;
}
.iconfont{
    cursor: pointer;
}
.title{
    width: 100%;
    height: 58px;
    line-height: 58px;
    font-size: 22px;
}
/* 闪购 */
.shangou{
    position: relative;
}
.shangou .toggle{
    position: absolute;
    right: 0;
    top: 0;
    height: 58px;
    line-height: 58px;
}
.shangou .toggle span{
    margin-right: -1px;
    margin-bottom: -1px;
    display: inline-block;
    text-align: center;
    line-height: 24px;
    width: 36px;
    height: 24px;
    border: 1px solid #B0B0B0;
    cursor: pointer;
}
.shangou .title .iconfont{
    font-size: 24px;
}
.shangou_box{
    display: block;
    width: 235px;
    height: 340px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, .1);
}
.shangou .shangou_main{
    width: 100%;
    height: 510px;
}
/* 闪购左边 */
.shangou_main .shangou_main_l{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border-top: 1px solid #E53935;
    background-color: #F1EDED;
}
.shangou_main_l{
    font-size: 21px;
    color: #E53934;
}
.shangou_main_l .icon{
    margin-top: 10px;
}
.shangou_main_l .iconfont{
    font-size: 60px;
}
.shangou_main_l .outtxt{
    margin-top: 10px; 
    font-size: 15px;
    color: rgba(0, 0, 0, .54);
}
.shangou_main_l .timeout{
    margin-top: 20px; 
    display: flex;
    justify-content:center;
    font-size: 30px;
    color: #000;
}
.shangou_main_l .timeout span{
    margin: 0 5px;
    display: block;
    width: 46px;
    height: 46px;
    background-color: #605751;
    color:white;
    text-align: center;
}
/* 闪购右边 */
.shangou_main .shangou_main_r{
    position: relative;
    width: 977px;
    height: 340px;
    overflow: hidden;
}
.shangou_main_r ul{
    position: absolute;
    left:0;
    top:0;
    width:9999px;
}
.shangou_main_r ul li{
    float: left;
    background-color: #FFFFFF; 
}
.shangou_main_r ul li:nth-child(n){
    border-top:1px solid #FFAC13;
}
.shangou_main_r ul li:nth-child(2n){
    border-top:1px solid #83C44E;
}
.shangou_main_r ul li:nth-child(3n){
    border-top:1px solid #2196F3;
} 
.shangou_main_r ul li:nth-child(4n){
    border-top:1px solid #E53935;
} 
.shangou_main_r ul li:nth-child(5n){
    border-top:1px solid #00C0A5;
}  
.shangou_main_r ul li:nth-child(6n){
    border-top:1px solid #FFA800;
} 
.shangou_main_r ul li:nth-child(7n){
    border-top:1px solid #FEF038;
}  
.shangou_main_r ul li:nth-child(8n){
    border-top:1px solid #2D1B55;
} 
.shangou_main_r ul li:nth-child(n+2){
    margin-left: 13px;
}
.shangou_main_r ul li a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.shangou_main_r .shangou_box img,
.shouji_main_r .shouji_box img,
.jiadian_main_r .shouji_box img{
    width: 160px;
    height: 160px;
}
h3{
    margin-top: 20px;
    margin-bottom: 5px;
    width:200px;
    font-size: 14px;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
}
.desc{
    width:200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
}
.price{
    margin-top: 10px;
    font-size: 14px;
    color: red;
}
.price del,
.price del{
    margin-left:5px; 
    color: #999999;
}
/* 底部图片 */
.footerImg{
    width:100%;
    height:120px;
    margin:24px 0;
}
.footerImg img{
    width:100%;
    height:100%;
}
/* 手机 */
.shouji{
    position: relative;
}
/* 查看全部 */
.selectAll{
    position: absolute;
    right: 0;
    top: 0;
    line-height: 58px;
    font-size: 18px;
}
.selectAll a:hover{
    color: #FF6700;
    transition: all .3s ease;
}
.selectAll a .iconfont{
    margin-left: 8px;
    font-size: 20px;
}
/* 内容部分 */
.shouji_box{
    display: block;
    width: 234px;
    height: 300px;
    transition: all .5s ease;
    margin-left: 14px;
    margin-bottom: 13px; 
}
.shouji_box:hover{
    transition: all .5s ease;
    transform: translateY(-3px);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, .2);
}
.shouji .shouji_main{
    width: 100%;
    height: 614px;
    margin-bottom: 40px; 
}
.shouji_main .shouji_main_l,
.jiadian_main .jiadian_main_l{
    width: 234px;
    height: 100%;
    margin-left: 0;
}
.shouji_main .shouji_main_r,
.jiadian_main .jiadian_main_r{
    width: 992px;
    height: 100%;
}
.shouji_main_r ul li,
.jiadian_main_r ul li{
    background-color: #FFFFFF;
}
.shouji_main_r li a,
.jiadian_main_r li a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

/* 家电 */
.jiadian{
    position: relative;
}
.jiadian_main_l .shouji_box img{
    width: 100%;
    height: 100%;
}
.jiadian_main_l .shouji_box{
    margin-left:0; 
}
.jiadian_main_r ul li:nth-child(8),
.jiadian_main_r ul li:last-child{
    height: 143px;
}
.lastBox .lastBox_l{
    width: 94px;
}
.lastBox_l h3{
    width: 100%;
    overflow:auto;
    text-overflow: ellipsis;
    white-space:normal;
    text-align: left;
}
.jiadian_main_r li:nth-child(8) a{
    display: flex;
    flex-direction: row;
}
.jiadian_main_r ul li:nth-child(8) img{
    width: 80px;
    height: 80px;
}
.goods_type{
    position: absolute;
    right: 0;
    top: 0;
}
.goods_type ul li{
    float: left;
    height: 58px;
    margin-left: 30px;
    padding: 14px 0;
}
.goods_type li a{
    display: block;
    height: 30px;
    font-size: 16px;
    color: black;
}
.goods_type li a:hover{
    border-bottom: 3px solid #FF6700;
    border-radius: 2px;
    color: #FF6700;
    transition: all .5s ease;
}
.goods_type_active{
    border-bottom: 3px solid #FF6700;
    border-radius: 2px;
    color: #FF6700 !important;
    transition: all .5s ease;
}
.jiadian_main_r .moreBox{
    display:flex;
    flex-direction: row;
}
.moreBox .moreContent{
    width: 94px;
    font-size: 18px;
    color: #000;
}
.moreContent small{
    color: #999999;
}
.moreBox i{
    font-size: 48px;
    color: #FF6700;
}
/* 视频 */
.shipin{
    position: relative;
}
.shipin_main{
    width: 100%;
    height: 300px;
}
.shipin_main ul{
    display: flex;
    height: 100%;
}
.shipin_main ul li{
    flex: 1;
    height: 100%;
    background-color: #FFFFFF;
    margin: 0 0 14px 14px; 
    transition: all .5s ease;
}
.shipin_main ul li:hover{
    transform: translateY(-4px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, .2);
    transition: all .5s ease;
}
.shipin_main ul li a{
    display:block;
    width: 100%;
    height: 100%;
    position: relative;
}
.shipin_main ul li:first-child{
    margin-left:0px; 
}
.shipin_main li img{
    width: 100%;
    height: 190px;
    margin-bottom: 28px;
}
.shipin_main h3,
.shipin_main .desc{
    width: 85%;
    margin: 0 auto;
}
.playicon{
    position: absolute;
    left: 20px;
    top: 140px;
    display: block;
    width: 26px;
    height: 26px;
    font-size: 30px;
    color:white;
    background-color: transparent;
    border-radius: 50%;
}
.playicon .iconfont{
    font-size: 31px;
    position: absolute;
    left: -2px;
    top: -10px;
}
.playicon_active{
    background-color: #FF6700;
}
/* 弹出层 */
.videoDialog{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 128240;
    width: 880px;
    transition: all ease .5s;
    min-height: 60px;
}
.videoZheZhaoCeng{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 114514;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.3);
}
.dialog_header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 14px 20px;
    line-height: 32px;
    background-color: white;
}
.dialog_title{
    font-size: 18px;
    color: #000;
}
.dialog_main{
    position: relative;
}
.dialog_main .dialogVideo{
    width: 100%;
}
.controls{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: chocolate;
}
 .demo{
    display: inline-block;
    width: 100%;
    text-align: center;
    line-height: 100px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    margin-right: 4px;
}.demo:hover{
    display: block;
  }
</style>