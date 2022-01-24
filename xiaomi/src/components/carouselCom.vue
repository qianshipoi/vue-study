<template>
  <div class="h">
    <div class="w">
      <div class="carousel">
        <transition-group tag="ul" name="image" mode="out-on"> 
            <li v-for="(item) in carouselList" v-show="item.id===index" :key="item.id" @mouseover="overImg()" @mouseleave="leaveImg()"> 
                <a :href="item.href">
                    <img :src="item.path" class="carouselImg" />
                </a>
            </li> 
        </transition-group> 
        <span class="iconfont prev" @click="prev()">&#xe659;</span>
        <span class="iconfont next" @click="next()">&#xe65b;</span>
        <div class="sidebar">
          <!-- 左侧导航栏 -->
          <ul>
            <li
              v-for="(item) in sidebarList"
              :key="item.id"
              @mouseover="movefunc(item.id)"
              @mouseleave="leavefunc(item.id)"
              ref = "sideLi"
              :class="item.id == active? 'liActive':''"
            >
              <a :href="item.href">
                <p>{{item.content}}</p>
                <i class="iconfont">&#xe65b;</i>
              </a>
            </li>
          </ul>
        </div>
        <!-- 显示页 -->
        <div class="sideInfo" v-show="sideInfo" @mouseover="movefunc(sideIndex)" @mouseleave="leavefunc(sideIndex)">
          <dl v-show="info1.length>0">
            <dd v-for="(item) in info1" :key="item.id"><a :href="item.href">
              <img :src="item.src"/><span>{{item.content}}</span> 
                </a>
            </dd>
          </dl>
          <dl v-show="info2.length>0">
              <dd v-for="(item) in info2" :key="item.id"><a :href="item.href">
              <img :src="item.src"/><span>{{item.content}}</span> 
                </a>
            </dd>
          </dl>
           <dl v-show="info3.length>0">
              <dd v-for="(item) in info3" :key="item.id"><a :href="item.href">
              <img :src="item.src"/><span>{{item.content}}</span> 
                </a>
            </dd>
          </dl>
           <dl v-show="info4.length>0">
              <dd v-for="(item) in info4" :key="item.id"><a :href="item.href">
              <img :src="item.src"/><span>{{item.content}}</span> 
                </a>
            </dd>
          </dl>
        </div>
      </div>
      <!-- sub -->
      <div class="homesub clearfix">
        <div class="channel">
          <ul class="clearfix">
            <li class="fl "><a href="javascript:;"><i class="iconfont">&#xe663;</i><span>小米秒杀</span></a></li>
            <li class="fl "><a href="javascript:;"><i class="iconfont">&#xe651;</i><span>企业团购</span></a></li>
            <li class="fl "><a href="javascript:;"><i class="iconfont">&#xe501;</i><span>F码通道</span></a></li>
            <li class="fl "><a href="javascript:;"><i class="iconfont">&#xe60e;</i><span>米粉卡</span></a></li>
            <li class="fl "><a href="javascript:;"><i class="iconfont">&#xe61e;</i><span>以旧换新</span></a></li>
            <li class="fl "><a href="javascript:;"><i class="iconfont">&#xe618;</i><span>话费充值</span></a></li>
          </ul>
        </div>
        <div class="promo">
            <ul>
              <li><a href="javascript:;"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7bc54a61b927dd8c54ddd39a0acf0254.jpg" /></a></li>
              <li><a href="javascript:;"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/94c74e01afe50a86c3a87ff030b85781.jpg" /></a></li>
              <li><a href="javascript:;"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg" /></a></li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      href: "javascript:;",
      path:
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e45bcdea59448cd82360662a331409fc.jpg",
      index: 3,
      carouselList: [
        {
          id: 1,
          path:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a5b9bde842f6a240d783bfd8c3d344ef.jpg",
          href: "javascript:;"
        },
        {
          id: 2,
          path:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4aa0cbfad7de34618c4bebdbdeee4e1.jpg",
          href: "javascript:;"
        },
        {
          id: 3,
          path:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e45bcdea59448cd82360662a331409fc.jpg",
          href: "javascript:;"
        },
        {
          id: 4,
          path:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e52c3e98602b90f198ec316dce253cba.jpg",
          href: "javascript:;"
        },
        {
          id: 5,
          path:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/755aca9487082e7698e16f17cfb70839.jpg",
          href: "javascript:;"
        }
      ],
      carouselImg:true,
      sideIndex:1,
      sidebarList: [
        { id: 1, content: "手机 电话卡", href: "javascript:;" ,info1:[
            {id: 1,content: "Redmi K30 4G",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2b8b609aab05d9ad184bbe5c8e8be28.jpg"},
            {id: 2,content: "Redmi K30 5G",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a98170e97ca5df8f5ad2470a8a2d01e.jpg"},
            {id: 3,content: "小米CC9 Pro",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74bb2ad7cb8b3707d8fd9d596e1866e2.png"},
            {id: 4,content: "Redmi 8A",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/77bfd346ad97807237beca297cfe2fba.png"},
            {id: 5,content: "Redmi 8",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/47057d897ee2c05c9215e059e1308dc6.png"},
            {id: 6,content: "小米MIX Alpha",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1e8be88112405471cee2c18ae0f1f62d.png"},
        ],info2:[
            {id: 1,content: "小米9 Pro 5G",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3ee5503ee5b2be373525e36309d922f8.png"},
            {id: 2,content: "Redmi Note 8 Pro",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cba27e53367b74271a38a4515a692816.png"},
            {id: 3,content: "Redmi Note 8",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4534b9fd22f478314f3cbbf286b7338.png"},
            {id: 4,content: "小米CC9",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b0d7d2c85734b80a1b8d1a4100c9c1f.png"},
            {id: 5,content: "小米CC美图定制版",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/20e23b306f50384ab85b6658f5c963ff.jpg"},
            {id: 6,content: "小米CC9e",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d3ee15816d2ccbe922172033c3c3941.png"},
        ],info3:[
            {id: 1,content: "小米MIX 3",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9e83fabc3efeb8dd9f880ce26220c294.png"},
            {id: 2,content: "黑鲨手机 2 Pro",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eea579b45e6d01f214423c19ef76a459.png"},
            {id: 3,content: "Redmi 7A",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/85d746207b997873ddfcdca0da025f78.jpg"},
            {id: 4,content: "Redmi Note 7 Pro",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26d1de72e958da75048be5c6cc0b73f6.jpg"},
            {id: 5,content: "移动4G+专区",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c483e65040470208823a8bfb5d73c27.jpg"},
            {id: 6,content: "小米移动 电话卡",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dafced4abb82c502c087a2aca7078f48.jpg"},
        ],info4:[
             {id: 1,content: "手机上门维修",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/84e19ece0125992449a6276e2ba333e9.png"},
            {id: 2,content: "云服务空间月卡",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg"},
        ]
        },
        { id: 2, content: "电视 盒子", href: "javascript:;" ,info1:[
            {id: 1,content: "小米电视5 55英寸",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/23316088a9182a08c624958319924d8d.png"},
            {id: 2,content: "小米电视5 65英寸",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8264eb9b900ead63eea69f6fc1e413a.png"},
            {id: 3,content: "小米电视5 75英寸",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d707cdac2a19703b57e65212f32fd25b.png"},
            {id: 4,content: "小米电视5 Pro 55英寸",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/942d4f28d406f3946f0ce551c125c641.png"},
            {id: 5,content: "小米电视5 Pro 65英寸",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d096389e19ba6b79b324b7d0acfab7ca.png"},
            {id: 6,content: "小米电视5 Pro 75英寸",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/da1680fb62238cb5b01998d80fc34e25.png"},
        ],info2:[
            {id: 1,content: "Redmi 红米电视 70英寸",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c6f98e59f3e78eb5d959bbcff081562.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 2,content: "全面屏电视Pro 65英寸",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/18c9d79b3d6c6635c55ba1bb371182af.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 3,content: "全面屏电视Pro 55英寸",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a3aff2c5e8207dafd8fc3bfad5a2e21.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 4,content: "小米壁画电视 65英寸",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5732e8f317eb86bfcb174fbb49d00c4a.jpg?thumb=1&w=40&h=40"},
            {id: 5,content: "小米全面屏电视",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8aeae36f5d088f22c84b8953bd0d08b4.jpg?thumb=1&w=40&h=40"},
            {id: 6,content: "小米电视4A 32英寸",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/820cba6c44f7263c5fe773a7ffaf85b9.png?thumb=1&w=40&h=40"},
        ],info3:[
            {id: 1,content: "小米电视4A 43英寸青春版",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ea8be80c82c273e167d5b282b17e9b2b.png?thumb=1&w=40&h=40"},
            {id: 2,content: "小米电视4A 49英寸",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a9710af2fff5548ea05950473898ef0e.jpg?thumb=1&w=40&h=40"},
            {id: 3,content: "小米电视4A 50英寸",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2f15dd9779865b48bfa8c8e915ac75ac.png?thumb=1&w=40&h=40"},
            {id: 4,content: "小米电视4A 55英寸",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5732e8f317eb86bfcb174fbb49d00c4a.jpg?thumb=1&w=40&h=40"},
            {id: 5,content: "小米电视4A 58英寸",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/11e4d06f29877044ddce0f9fdd2e26d5.png?thumb=1&w=40&h=40"},
            {id: 6,content: "小米电视4A 65英寸",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ca8058c9c776447265b99420ff04e544.png?thumb=1&w=40&h=40"},
        ],info4:[
            {id: 1,content: "小米电视4C 32英寸",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cb83515483547404cd26a962bada5d5b.png?thumb=1&w=40&h=40"},
            {id: 2,content: "小米电视4C 40英寸",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/af572c503ed2a81ab71e2810617860c5.jpg?thumb=1&w=40&h=40"},
            {id: 3,content: "小米电视4C 43英寸",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7bef124bc015669bdacf76d5d4b02a7e.png?thumb=1&w=40&h=40"},
            {id: 4,content: "小米电视4C 50英寸",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/24ee18218b3b98161e17abe23c6fd539.png?thumb=1&w=40&h=40"},
            {id: 5,content: "小米电视4C 55英寸",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe603cc3b9c19903be14aac4e9b571d6.jpg?thumb=1&w=40&h=40"},
            {id: 6,content: "小米电视4X 43英寸",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/53f3593ab87d90c4cc5201e10a5c42f7.png?thumb=1&w=40&h=40"},
        ]},
        { id: 3, content: "笔记本 显示器 平板", href: "javascript:;",info1:[
            {id: 1,content: "RedmiBook 13",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aee86bcd8bf491eb78ae234d2e188a66.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 2,content: "小米笔记本 15.6\"",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f45cdc4f94f1f1651095dedb154c2e4.png?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 3,content: "小米笔记本 13.3\"",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1f95bb7c9206951e3d870cb5581b8329.png?thumb=1&w=40&h=40"},
            {id: 4,content: "小米笔记本 12.5\"",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/eaab0db21859e0e58cae1fb807907905.jpg?thumb=1&w=40&h=40"},
            {id: 5,content: "RedmiBook 13",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a3c149225946312f2b4bbe1263f65450.png?thumb=1&w=40&h=40"},
            {id: 6,content: "小米游戏本",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a66c24ee8ae2efea3ae92ec455a27352.jpg?thumb=1&w=40&h=40"},
        ],info2:[
            {id: 1,content: "显示器",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b32e4db4b53b0c56c6040f094e96d945.png?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 2,content: "小米平板4",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/131e5d409e62eedb94577cae11c530f1.jpg?thumb=1&w=40&h=40"},
            {id: 3,content: "键鼠套装",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0eb7e33b11443f6927e2035eca7c3d9e.png?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 4,content: "鼠标",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c61933e7ac89c61bc727c275391e82e0.png?thumb=1&w=40&h=40"},
            {id: 5,content: "转接器",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e18c5807226399f5b24b340241fe8cc1.png?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 6,content: "平板配件",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/32bfcdebff3058de7bc0b2855d05c240.jpg?thumb=1&w=40&h=40"},
        ],info3:[
            {id: 1,content: "小米笔记本内胆包",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/48ec2200729879ed3e3bc01b61146d79.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
        ],info4:[]},
        { id: 4, content: "家电 插线板", href: "javascript:;",info1:[
            {id: 1,content: "冰箱",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 2,content: "立式空调",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96de94415b860f3de95b2d6294f0d0fd.png?thumb=1&w=40&h=40"},
            {id: 3,content: "壁挂空调",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&w=40&h=40"},
            {id: 4,content: "滚筒洗衣机",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png?thumb=1&w=40&h=40"},
            {id: 5,content: "Redmi全自动波轮洗衣机",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3bace6e62cecb7901e306b05502535f.jpg?thumb=1&w=40&h=40"},
            {id: 6,content: "净水器",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg?thumb=1&w=40&h=40"},
        ],info2:[
            {id: 1,content: "微波炉",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7dcbb8c268574041ce0b4b98e591cf1.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 2,content: "电烤箱",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7f39b7ac49227fc59c3f2b2105d25d6.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 3,content: "扫地机器人",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/603beb09930e32addd1b362bf43c7ac2.jpg?thumb=1&w=40&h=40"},
            {id: 4,content: "吸尘器",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26deda5474eb7eb7e5b34547c58b9893.jpg?thumb=1&w=40&h=40"},
            {id: 5,content: "空气净化器",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e997ed31cd5199ec0a24eeb48a37b1e7.jpg?thumb=1&w=40&h=40"},
            {id: 6,content: "电饭煲",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/390e15818dd103b2f96f4ac742d47379.jpg?thumb=1&w=40&h=40"},
        ],info3:[
            {id: 1,content: "电磁炉",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d93e6a98403262a506c9e9b22293cdae.jpg?thumb=1&w=40&h=40"},
            {id: 2,content: "电水壶",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/39c8ccbebd08687bc6780373b7ef2a95.jpg?thumb=1&w=40&h=40"},
            {id: 3,content: "滤水壶",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9ffcebcacca008ed2d92a692f7312ef6.jpg?thumb=1&w=40&h=40"},
            {id: 4,content: "落地风扇",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3a3e4238b70ef8db89ae77f8a3762fc8.png?thumb=1&w=40&h=40"},
            {id: 5,content: "投影仪",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c12fd1da9fed662842d6f5c57d7737c9.png?thumb=1&w=40&h=40"},
            {id: 6,content: "灯具",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c0a6b523433a492dbf32035b2983d98e.jpg?thumb=1&w=40&h=40"},
        ],info4:[
            {id: 1,content: "插线板",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d1c8cfb055709db380c6de981a4c894b.jpg?thumb=1&w=40&h=40"},
            {id: 2,content: "新风机",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1cc417a7cae8c4ff8b0041fa29003717.jpg?thumb=1&w=40&h=40"},
            {id: 3,content: "电暖炉",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6aa1871d84aaae98cd676f5e2cf5c2f2.jpg?thumb=1&w=40&h=40"},
            {id: 4,content: "电压力锅",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ba8d2a2d383f612575d323ce159bdce3.jpg?thumb=1&w=40&h=40"},
            {id: 5,content: "料理机",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0bf0ba35dc3ad57115c59f0ebde0fd1d.jpg?thumb=1&w=40&h=40"},
            {id: 6,content: "电煮壶",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b7de8a5bc64975df73f5fde5507fc8d1.jpg?thumb=1&w=40&h=40"},
        ] },
        { id: 5, content: "出行 穿戴", href: "javascript:;" ,info1:[
            {id: 1,content: "小米手环",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3cc76c2ce836255c1b2e3e1cf477cfef.png?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 2,content: "手环手表",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4dd7eeff34b478acd2cf3eec99b78c96.png?thumb=1&w=40&h=40"},
            {id: 3,content: "VR",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fece041c17bdebaab5f3a9313c7c0f8c.jpg?thumb=1&w=40&h=40"},
            {id: 4,content: "平衡车",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/50180b158690a40f9cbc684c7646d297.jpg?thumb=1&w=40&h=40"},
            {id: 5,content: "滑板车",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4e9da27ebbeeb38078910c97173c4671.jpg?thumb=1&w=40&h=40"},
            {id: 6,content: "自行车",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/749c779fd3789ba94033da8aaa547dcd.png?thumb=1&w=40&h=40&f=webp&q=90"},
        ],info2:[
            {id: 1,content: "车载充电器",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/787c807176455f9ae40146af11e98b1e.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 2,content: "平衡车配件",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ac5b263aac2ffa1894fb7b215c3ce87.jpg?thumb=1&w=40&h=40"},
            {id: 3,content: "智能后视镜",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/971c8c01a246c7ac69a4c9be9e77e832.jpg?thumb=1&w=40&h=40"},
            {id: 4,content: "智能记录仪",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2748064a9ac9969e53851479d55f1a9.jpg?thumb=1&w=40&h=40"},
            {id: 5,content: "无线车充",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/efd04d4a90822e7e2f04a365083f2607.jpg?thumb=1&w=40&h=40"},
            {id: 6,content: "充电宝",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8b398bad185dddb5397f2c0d9a3f6271.jpg?thumb=1&w=40&h=40"},
        ],info3:[
            {id: 1,content: "平衡轮",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6d92b9db10f261f56b2f2dfb93ca132e.jpg?thumb=1&w=40&h=40"},
            {id: 2,content: "石英表",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f941386e72f745b02e8921b6c8055cd6.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
        ],info4:[]},
        { id: 6, content: "智能 路由器", href: "javascript:;",info1:[
            {id: 1,content: "打印机",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=40&h=40"},
            {id: 2,content: "喷墨打印机",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1c8b0308b1591ab93b7fe0937a52427.png?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 3,content: "喷墨打印机墨水",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a18e471294cf49b6937ae90fac6d583.png?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 4,content: "小米路由器",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9059e454b3d53832fb3a1c1e5af29cc9.png?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 5,content: "智能家庭",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/14107363b5dc77b18e9983bda999931d.jpg?thumb=1&w=40&h=40"},
            {id: 6,content: "对讲机",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21fedf7ba9019bce59cbc4856f907076.jpg?thumb=1&w=40&h=40"},
        ],info2:[
            {id: 1,content: "摄像头",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/067f4a6f0ffb264ed40734a97deae52d.jpg?thumb=1&w=40&h=40"},
            {id: 2,content: "照相机",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/81d89cfdb72d0445ed4ef19942d9dedb.jpg?thumb=1&w=40&h=40"},
            {id: 3,content: "智能门锁",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4fb7885d49255b93f7245aa53501294c.jpg?thumb=1&w=40&h=40"},
            {id: 4,content: "智能门铃",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/feaab5bd13257dbe8f30b80b6a4472be.jpg?thumb=1&w=40&h=40"},
            {id: 5,content: "小爱老师",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/90b75c1046e486c19f14effd9b45f488.png?thumb=1&w=40&h=40"},
            {id: 6,content: "Redmi路由器",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/51eacc66512a31713808a60b5695ae28.png?thumb=1&w=40&h=40&f=webp&q=90"},
        ],info3:[
             {id: 1,content: "小爱音箱",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg?thumb=1&w=40&h=40"},
            {id: 2,content: "云服务空间年卡",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7646993f6c382fb32ebd9bfda8ba6158.png?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 3,content: "云服务空间月卡",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7646993f6c382fb32ebd9bfda8ba6158.png?thumb=1&w=40&h=40&f=webp&q=90"},
        ],info4:[] },
        { id: 7, content: "电源 配件", href: "javascript:;" ,info1:[
            {id: 1,content: "移动电源",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/91e56808d5c6f4fb7e9d41590f8b889c.jpg?thumb=1&w=40&h=40"},
            {id: 2,content: "数据线",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/45dd7a2c4fc3d17d5d261ed3eed7cd15.jpg?thumb=1&w=40&h=40"},
            {id: 3,content: "车充",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/397d8119508e8e3c895fc30ece88e799.jpg?thumb=1&w=40&h=40"},
            {id: 4,content: "无线充",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c9f55aa85533b69bf3f98ef0e11d924f.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 5,content: "电池",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/10ec831749f1c657fc0a494feab15ed4.jpg?thumb=1&w=40&h=40"},
            {id: 6,content: "自拍杆",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2725e04c955dc060ac142fabbf809c1e.jpg?thumb=1&w=40&h=40"},
        ],info2:[
            {id: 1,content: "手机壳",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c6e60e48edf17219724faad95963b93.jpg?thumb=1&w=40&h=40"},
            {id: 2,content: "手机贴膜",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e9e248c899fd895c9267f494ea1aaebf.jpg?thumb=1&w=40&h=40"},
            {id: 3,content: "手机支架",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/826264a4845f45a0a503600f9331ab06.jpg?thumb=1&w=40&h=40"},
            {id: 4,content: "平板配件",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6ce8ff4bc1e6ded2d40c53b2aa83b98c.jpg?thumb=1&w=40&h=40"},
            {id: 5,content: "黑鲨配件",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9c3ead590f49767a4f562b7285215f5e.jpg?thumb=1&w=40&h=40"},
            {id: 6,content: "其他配件",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=40&h=40"},
        ],info3:[],info4:[]},
        { id: 8, content: "健康 儿童", href: "javascript:;" ,info1:[
            {id: 1,content: "洗手机",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=40&h=40"},
            {id: 2,content: "修剪器",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96b5d738ce5926e3a6969ad68fa1521d.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 3,content: "剃须刀",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60d7bdf307ceaba08b3275246ad3ab53.jpg?thumb=1&w=40&h=40"},
            {id: 4,content: "日光镜",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/320c12a501b40fa1d69d0ca3a4303129.jpg?thumb=1&w=40&h=40"},
            {id: 5,content: "牙刷",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg?thumb=1&w=40&h=40"},
            {id: 6,content: "吹风机",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg?thumb=1&w=40&h=40"},
        ],info2:[
            {id: 1,content: "体重秤",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/459afd0eb2a3bc6313e7ac62bd3a52df.png?thumb=1&w=40&h=40"},
            {id: 2,content: "体脂秤",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe6166ca2026008abb86bc67dfd8211d.jpg?thumb=1&w=40&h=40"},
            {id: 3,content: "早教启智",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2cb10391d6527bf64126a63446a38e2e.jpg?thumb=1&w=40&h=40"},
            {id: 4,content: "遥控电动",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ab36232a1004421e1a5b3efd0b9226c0.jpg?thumb=1&w=40&h=40"},
            {id: 5,content: "益智积木",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c9a5feb1f6c9b9aa0dc998c17e5eb3e9.jpg?thumb=1&w=40&h=40"},
            {id: 6,content: "儿童手表",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0b3a592784632760a7ef25de50147a7.jpg?thumb=1&w=40&h=40"},
        ],info3:[
            {id: 1,content: "儿童滑板车",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9f6a34ed8071b821ee5aa8d32a7be95d.jpg?thumb=1&w=40&h=40"},
            {id: 2,content: "婴儿推车",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=40&h=40"},
            {id: 3,content: "儿童书包",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d55c8943ceac7cd5ac7d8aa052f69b93.jpg?thumb=1&w=40&h=40"},
            {id: 4,content: "婴儿理发器",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/17d625c8b5466b9527e9c06c71601939.jpg?thumb=1&w=40&h=40"},
            {id: 5,content: "儿童保温杯",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/81737be7672dfa85cbb3abc65669f091.jpg?thumb=1&w=40&h=40"},
            {id: 6,content: "健身车",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4bf92a8a492f692a81794f52fefd1a29.png?thumb=1&w=40&h=40&f=webp&q=90"},
        ],info4:[
            {id: 1,content: "走步机",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fb1fee7e2f2963baae34d3611a2b7e9f.jpg?thumb=1&w=40&h=40"},
            {id: 2,content: "点读笔",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ccdce424f41806f775693748058fa2ca.jpg?thumb=1&w=40&h=40"},
        ]},
        { id: 9, content: "耳机 音箱", href: "javascript:;" ,info1:[
            {id: 1,content: "音箱 Pro",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/360215a1e32317abb912d48c3e80dd20.png?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 2,content: "小爱音箱",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/374ce749560e0e74a792b6222048a472.png?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 3,content: "小米小爱音箱 Play版",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg?thumb=1&w=40&h=40"},
            {id: 4,content: "线控耳机",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8b3d235f4a5a5bf5c9d8d066d2166e6c.jpg?thumb=1&w=40&h=40"},
            {id: 5,content: "蓝牙耳机",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa9306bdfc7cfa595462f87404430258.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 6,content: "头戴耳机",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/28a77451da1dbd0d3e42d529777997c3.jpg?thumb=1&w=40&h=40"},
        ],info2:[
            {id: 1,content: "品牌耳机",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4885bda69e45b870a5bcf5bbaea1548b.jpg?thumb=1&w=40&h=40"},
            {id: 2,content: "蓝牙音箱",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f7c7a9d73fb7b3cf93d3ae0dc2849f5e.jpg?thumb=1&w=40&h=40"},
            {id: 3,content: "小米AI音箱",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/db89d422ef877cf7290616fef515e413.jpg?thumb=1&w=40&h=40"},
            {id: 4,content: "小米小爱音箱HD",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4df2fa022495e79f890a943a9d7e70a5.jpg?thumb=1&w=40&h=40"},
            {id: 5,content: "k歌耳机",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a290d924c1bbd1e3ce64e96f497d4059.jpg?thumb=1&w=40&h=40"},
            {id: 6,content: "Redmi音箱",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacef871b6af373b0212e28b028890b8.png?thumb=1&w=40&h=40&f=webp&q=90"},
        ],info3:[
            {id: 1,content: "小爱触屏音箱",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/abe665fafbef94eb3626ae8baf1de97e.jpg?thumb=1&w=40&h=40"},
        ],info4:[]},
        { id: 10, content: "生活 箱包", href: "javascript:;",info1:[
            {id: 1,content: "小背包",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 2,content: "双肩包",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg?thumb=1&w=40&h=40"},
            {id: 3,content: "胸包",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2846c64ffd97969c639979da9bb97974.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 4,content: "旅行箱",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 5,content: "运动鞋",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg?thumb=1&w=40&h=40"},
            {id: 6,content: "眼镜",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d521bd58668f66c50562b8fa8949f67c.jpg?thumb=1&w=40&h=40"},
        ],info2:[
            {id: 1,content: "床垫",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/aba45662667dceaf4ba0e5b08f44d3a7.jpg?thumb=1&w=40&h=40"},
            {id: 2,content: "枕头",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/744306b95df4d130bdfc346ff2b3c871.png?thumb=1&w=40&h=40"},
            {id: 3,content: "饰品",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e9bc4f84825f80ce520eefa4f762939.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 4,content: "螺丝刀",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/458169c8138413666feb860068ce1a56.jpg?thumb=1&w=40&h=40"},
            {id: 5,content: "保温杯",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/813d173eff50a83abb8abd5abde5f5a6.jpg?thumb=1&w=40&h=40"},
            {id: 6,content: "伞",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/395ffd04841f70b8bdf67339ba1dfc98.jpg?thumb=1&w=40&h=40"},
        ],info3:[
            {id: 1,content: "驱蚊器",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/59d3a701ac0bbb78f1b1d0ea7ebc7505.jpg?thumb=1&w=40&h=40"},
            {id: 2,content: "尤克里里",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2cb85b96b12395fdaa7bccaf8f94e758.jpg?thumb=1&w=40&h=40"},
            {id: 3,content: "毛巾\/浴巾",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21c3ec8638dd75f5c54f1a69864a1cc9.jpg?thumb=1&w=40&h=40"},
            {id: 4,content: "米兔",href: "javascript:;",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01d68f08e17fd9a9ffea0e18e245eebd.jpg?thumb=1&w=40&h=40&f=webp&q=90"},
            {id: 5,content: "笔",href: "javascript:;",src:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c9279a17e9399958420af64e449e3214.jpg?thumb=1&w=40&h=40"},
        ],info4:[]}
      ],
      sideInfo: false,
      info1:[],
      info2:[],
      info3:[],
      info4:[],
      active:0,
      timer:''
    };
  },
  methods: {
    prev() {
        clearInterval(this.timer);
      if (this.index == 1) this.index = this.carouselList.length;
      else this.index = --this.index;
       this.timer = setInterval(this.carouselAuto, 5000);
    },
    next() {
        clearInterval(this.timer);
      if (this.index == this.carouselList.length) this.index = 1;
      else this.index = ++this.index;
       this.timer = setInterval(this.carouselAuto, 5000);
    },
    movefunc(obj) {
        this.active = obj;
        this.sideIndex = obj;
        this.sideInfo = true;
        this.sidebarList.filter(item=>{
            if(item.id == obj){
                this.info1 = item.info1;
                this.info2 = item.info2;
                this.info3 = item.info3;
                this.info4 = item.info4;
            }
        })
    },
    leavefunc(obj) {
        this.active = 0;
        this.sideInfo = false;
    },
    carouselAuto(){
        this.carouselImg = false;
        if(this.index + 1 > this.carouselList.length)
            this.index = 1
        else
            this.index = ++this.index;
        this.carouselImg = true;
    },
    overImg(){
        clearInterval(this.timer);
    },
    leaveImg(){
        this.timer = setInterval(this.carouselAuto, 5000);
    }
  },
  mounted(){
      this.timer = setInterval(this.carouselAuto, 5000);
  },
  watch: {
    index: function(newValue, OldValue) {
      this.carouselList.forEach(item => {
        if (item.id == newValue) {
          this.href = item.href;
          this.path = item.path;
        }
      });
    }
  },
  beforeDestroy(){
      clearInterval(this.timer);
  }
};

</script>

<style scoped>
.iconfont{
    cursor: pointer;
}
.h {
  width: 100%;
  height: 675px;
  background-color: #ffffff;
}
.carousel {
  position: relative;
  height: 460px;
  background-color: black;
}
.carousel ul li{
    width: 100%;
}
.carouselImg {
  position: absolute;
  width: 100%;
  height: 100%;
}
.carousel .prev,
.carousel .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 40px;
  height: 70px;
  color: #dccfd7;
  font-size: 40px;
  cursor: pointer;
  line-height: 70px;
}
.carousel .prev:hover,
.carousel .next:hover {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
.prev {
  left: 235px;
}
.next {
  right: 0;
}
.image-enter-active,
.image-leave-active { 
    opacity: 1;
    transition: all 1s ease; 
 }  
.image-enter,
.image-leave{ 
    opacity: 0.3;
}
/* 侧边栏 */
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 2;
  width: 236px;
  background-color: rgba(0, 0, 0, 0.5);
}
a {
  color: #E0E0E0;
}
a:hover {
  color: #E0E0E0;
}
.sidebar ul {
  padding: 20px 0;
}
.sidebar ul li {
  height: 42px;
  color: #E0E0E0;
  font-size: 15px;
  line-height: 42px;
}
.sidebar ul li:hover {
  background-color: #ff6700;
}
.sidebar ul li a {
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 40px;
}
.sidebar ul li .iconfont {
  height: 42px;
  color: white;
  font-size: 20px;
  vertical-align: middle;
}

/* 侧边栏详细信息 */
.sideInfo {
  position: absolute;
  left: 236px;
  z-index: 3;
  display: flex;
  min-width: 248px;
  height: 460px;
  background-color: white;
  font-size: 15px;
  box-shadow: 0 7px 8px rgba(0, 0, 0, 0.2);
}
.sideInfo dl {
  width: 249px;
  height: 100%;
}
.sideInfo dl dd a{
    display: flex;
    align-items: center;
    padding-left: 20px;
    width: 100%;
    height: 77px;
    color: black;
}
.sideInfo dl dd a:hover{
    color: #FF6700;
}
.sideInfo img {
    margin-right: 20px;
    width: 40px;
}
/* 选中 */
.liActive{
      background-color: #ff6700;
}
/* sub */
.homesub{
  width: 100%;
  height: 170px;
  margin-top:14px;
}
/* channel */
.homesub .channel{
  width: 236px;
  height: 100%;
  float: left;
  background-color: #5F5750;
}
.channel ul{
  width: 236px;
  height: 100%;
}
.channel ul li{
  width: 33.3%;
  height: 50%;
  position: relative;
}
.channel ul li::before{
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: 64px;
  height: 1px;
  background-color: #665E57;
}
.channel ul li::after{
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  width: 1px;
  height: 64px;
  background-color: #665E57;
}
.channel ul li a{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #CFCCCA;
}
.channel ul li a:hover{
  color:white;
}
.channel ul li a i{
  font-size: 20px;
}
/* promo */
.homesub .promo{
  width: 978px;
  height: 100%;
  float:right;
}
.promo ul{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.promo ul li{
  display: block;
  width: 316px;
  height: 170px;
}
.promo ul li img{
  width: 100%;
  height: 100%;
}
.promo ul li img:hover{
  box-shadow: 0px 1px 7px rgb(0, 0, 0);
}
</style>