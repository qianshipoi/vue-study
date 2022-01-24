<template>
        <header class="header">
            <div class="w">
                <div class="logo"></div>
                <div class="sort">
                    <ul>
                        <li v-for="(item, index) in shoujiList" :key='index' 
                            @mousemove="movefunc(item.id)"
                            @mouseleave="leavefunc()"
                            class="clearfix"
                        >
                            <a :href="item.link">{{item.content}}</a>
                        </li>
                    </ul>
                </div>
                <div class="search">
                    <input type="text" class="search_content">
                    <div class="search_btn iconfont">&#xe63e;</div>
                </div>
            </div>
            <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @leave="leave"
            >
                <div class="chouti" v-show="chouti">
                    <ul>
                        <li v-for="(item, index) in choutiList" :key="index" @mousemove='movefunc()' @mouseleave="leavefunc()">
                            <img :src="item.imgsrc" />
                            <p>{{item.content}}</p>
                            <span>{{item.money}}元起</span>
                        </li>
                    </ul>
                </div>
            </transition>
        </header>
</template>
<script>
export default {
    data(){
        return{
            shoujiList:[
                {id:1,content:'小米手机',link:'javascript:;',func:'movefunc'},
                {id:2,content:'Redmi 手机',link:'javascript:;',func:'movefunc'},
                {id:3,content:'电视',link:'javascript:;',func:'movefunc'},
                {id:4,content:'笔记本',link:'javascript:;',func:'movefunc'},
                {id:5,content:'家电',link:'javascript:;',func:'movefunc'},
                {id:6,content:'路由器',link:'javascript:;',func:'movefunc'},
                {id:7,content:'智能硬件',link:'javascript:;',func:'movefunc'},
                {id:8,content:'服务',link:'javascript:;',func:''},
                {id:9,content:'社区',link:'javascript:;',func:''}
            ],
            chouti:false,
            choutiList:[],
            chouti1:[
                {id:1,content:"小米CC9 Pro",money:"2599",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572941094.42616676.jpg"},
                {id:2,content:"小米9 Pro",money:"3699",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1569242378.68478559.jpg"},
                {id:3,content:"小米CC9",money:"2599",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1562056090.0987631.jpg"},
                {id:4,content:"小米CC9e",money:"2599",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1562032923.03053546.png"},
                {id:5,content:"小米CC9 美图定制版",money:"2599",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1563191339.42782395.jpg"},
                {id:6,content:"小米MIX 3",money:"2599",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1540429657.8272281.jpg"},
            ],
            chouti2:[
                {id:1,content:"Redmi K30",money:"1599",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575881713.96322514.jpg"},
                {id:2,content:"Redmi K30 5G",money:"1999",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1569242378.68478559.jpg"},
                {id:3,content:"Redmi 8A",money:"2599",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1571387136.02255722.jpg"},
                {id:4,content:"Redmi Note 8",money:"2599",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1573823282.77886401.jpg"},
                {id:5,content:"Redmi K20 Pro 尊享版",money:"2599",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1569558295.57917783.jpg"},
                {id:6,content:"Redmi Note 8 Pro",money:"2599",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1567056800.38981084.png"},
            ],
             chouti3:[
                {id:1,content:"Redmi 红米电视 70英寸",money:"2999",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1566998167.20454521.jpg"},
                {id:2,content:"小米壁画电视 65英寸",money:"6999",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1555935546.09711490.jpg"},
                {id:3,content:"小米全面屏电视E55A",money:"1899",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1562138486.16379871.jpg"},
                {id:4,content:"小米电视4A 32英寸",money:"699",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1500287084.72131750.jpg"},
                {id:5,content:"小米电视4A 55英寸",money:"1799",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1535100756.34411219.jpg"},
                {id:6,content:"小米电视4A 65英寸",money:"2699",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1535103027.24861415.jpg"},
            ],
             chouti4:[
                {id:1,content:"RedmiBook 13 独显",money:"4499",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575878438.17548919.jpg"},
                {id:2,content:"Pro 15 增强版",money:"6799",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1571559783.51144034.jpg"},
                {id:3,content:"RedmiBook 14 增强版",money:"4799",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1566878667.59559757.jpg"},
                {id:4,content:"游戏本2019款",money:"9299",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1570689391.65255877.jpg"},
                {id:5,content:"小米笔记本15.6\"",money:"3899",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1553738425.08569829.jpg"},
                {id:6,content:"小米笔记本Air 12.5\"",money:"3599",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1561023757.05432233.jpg"},
            ],
             chouti5:[
                {id:1,content:"空调C1（1.5匹/变频/一级能效）",money:"2599",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1554108362.70322107.jpg"},
                {id:2,content:"空调（1.5匹/变频/一级能效）",money:"2499",imgsrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/819f7dcde77a8626052e05b8cb6678e6.jpeg"},
                {id:3,content:"Redmi全自动波轮洗衣机1A",money:"799",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1552868299.23297041.jpg"},
                {id:4,content:"米家互联网洗烘一体机",money:"1999",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1545975724.92496169.jpg"},
                {id:5,content:"小米净水器（厨下式）",money:"1299",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1521634907.16181074.jpg"},
                {id:6,content:"米家扫地机器人",money:"1299",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1472609961.95298675.jpg"},
            ],
             chouti6:[
                {id:1,content:"Redmi路由器AC2100",money:"169",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575364048.00449310.jpg"},
                {id:2,content:"小米路由器AC2100",money:"229",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1568604846.48212023.jpg"},
                {id:3,content:"小米路由器Mesh",money:"999",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1557490451.12382394.jpg"},
                {id:4,content:"小米路由器4A千兆版",money:"129",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1545975724.92496169.jpg"},
                {id:5,content:"小米路由器4C",money:"59",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1532604005.80875371.jpg"},
                {id:6,content:"小米路由器4A",money:"99",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1558927605.77414956.jpg"},
            ],
             chouti7:[
                {id:1,content:"小米米家智能摄像机云台版",money:"169",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1567393585.49577260.jpg"},
                {id:2,content:"小米「小爱老师」",money:"429",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560222533.85047588.jpg"},
                {id:3,content:"小米米家智能门锁",money:"1499",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1563865993.31449496.jpg"},
                {id:4,content:"小米小爱触屏音箱",money:"199",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1550719656.70567332.jpg"},
                {id:5,content:"Redmi小爱音箱 Play",money:"79",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575427252.04796744.jpg"},
                {id:6,content:"查看全部",money:"9.9",imgsrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560151939.71121260.png"},
            ],
        }
    },
    created(){
    },
    methods:{
        movefunc(id){
            if(id==8||id==9) return;
            if(id==1)
                this.choutiList = this.chouti1;
            else if(id==2)
                this.choutiList = this.chouti2;
            else if(id==3)
                this.choutiList = this.chouti3;
            else if(id==4)
                this.choutiList = this.chouti4;
            else if(id==5)
                this.choutiList = this.chouti5;
            else if(id==6)
                this.choutiList = this.chouti6;
            else if(id==7)
                this.choutiList = this.chouti7;
            this.chouti = true
        },
        leavefunc(){
            this.chouti = false
        },
        beforeEnter(el){
            el.style.transform="translate(0,0)";
            el.style.height="0";
        },
        enter(el){
            el.offsetWidth
            el.style.transition=" all ease .3s .2s"
            el.style.height="230px";
        },
        leave(el){
            el.style.transition=" all ease .3s .1s"
            el.style.transform="translate(0,0)";
            el.style.height="0";
        },
    }
}

</script>
<style scoped>
.header{
    background-color:#FFFFFF; 
}
    .w{
        height: 100px;
        display: flex;
        justify-content:space-between;
        align-items: center;
    }
    .logo{
        width: 55px;
        height: 55px;
        font-size: 100px;
        background: url(../images/logo.png) -55px 0;
        transition: all ease .3s;
    }
    .logo:hover{
        background: url(../images/logo.png) 0 0;
    }
    .sort{
        margin-left: 100px;
    }
    .header .sort ul{
        width: 620px;
        height: 100px;
    }
    .header .sort ul li{
        float: left;
        font-size: 16px;
        padding:0 10px;
        height: 100px;
        line-height: 100px;
    }
    .header .sort ul li a{
        color: #333333;
    }
    .search{
        width: 300px;
        height: 50px;
        border: 1px solid #E0E0E0;
        display: flex;
        transition: all ease .3s;
    }
    .search:hover{
        border: 1px solid #FF6700;
    }
    .search .search_content{
        flex: 5;
        padding-left: 10px;
        border-right: 1px solid #E0E0E0;
        transition: all ease .3s;
    }
    .search_content:hover{
        border-right: 1px solid #FF6700;
    }
    .search .search_btn{
        flex: 1;
        text-align: center;
        line-height: 50px;
        font-size: 30px;
        transition: all ease .3s;
        cursor: pointer;
    }
    .search_btn:hover{
        background-color: #FF6700;
        color: white;
    }
    .chouti{
        position: absolute;
        z-index: 999;
        width: 100%;
        background-color: white;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
        overflow: hidden;
    }
    .chouti ul{
        width: 1230px;
        margin: 0 auto;
        display: flex;
        justify-content:space-between;
    }
    .chouti ul li{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .chouti img{
        width: 140px;
    }
    .chouti span{
        color: red;
    }
</style>
