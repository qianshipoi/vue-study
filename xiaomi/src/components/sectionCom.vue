<template>
  <section class="section">
    <div class="w">
      <div class="fl">
        <ul>
          <li>
            <a href="javascript:;">小米商城</a>
          </li>
          <li></li>
          <li>
            <a href="javascript:;">MIUI</a>
          </li>
          <li></li>
          <li>
            <a href="javascript:;">loT</a>
          </li>
          <li></li>
          <li>
            <a href="javascript:;">云服务</a>
          </li>
          <li></li>
          <li>
            <a href="javascript:;">金融</a>
          </li>
          <li></li>
          <li>
            <a href="javascript:;">有品</a>
          </li>
          <li></li>
          <li>
            <a href="javascript:;">小爱开放平台</a>
          </li>
          <li></li>
          <li>
            <a href="javascript:;">企业团购</a>
          </li>
          <li></li>
          <li>
            <a href="javascript:;">直播</a>
          </li>
          <li></li>
          <li>
            <a href="javascript:;">资质证明</a>
          </li>
          <li></li>
          <li>
            <a href="javascript:;">协议规则</a>
          </li>
          <li></li>
          <li @mousemove="moveDown()" @mouseleave="leaveDown()" class="downLi">
            <a href="javascript:;">下载app
            <transition @before-enter="beforeEnterDown" @enter="enterDown" @leave="leaveDownA">
              <div class="downApp" v-show="downApp">
                <img src="https://i1.mifile.cn/f/i/17/appdownload/download.png?1" />
                  <span>小米商城APP</span>
              </div>
            </transition>
            </a>
          </li>
          <li></li>
          <li>
            <a href="javascript:;">Select Location</a>
          </li>
        </ul>
      </div>
      <div class="fr">
        <ul>
          <li>
            <a href="javascript:;">登录</a>
          </li>
          <li></li>
          <li>
            <a href="javascript:;">注册</a>
          </li>
          <li></li>
          <li>
            <a href="javascript:;">消息通知</a>
          </li>
          <li style="margin-right:20px; width:0"></li>
          <li @mousemove="moveGouwuce()" @mouseleave="leaveGouwuce()">
            <span>购物车({{counts}})</span>
            <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
              <div class="gouwuche" v-show="gouwuche">
                <!-- <ul>
                                    <li v-for="(item, index) in choutiList" :key="index" @mousemove='movefunc()' @mouseleave="leavefunc()">
                                        <img :src="item.imgsrc" />
                                        <p>{{item.content}}</p>
                                        <span>{{item.money}}元起</span>
                                    </li>
                </ul>-->
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      counts: 0,
      gouwuche: false,
      downApp: false
    };
  },
  methods: {
    moveGouwuce() {
      this.gouwuche = true;
    },
    leaveGouwuce() {
      this.gouwuche = false;
    },
    beforeEnter(el) {
      el.style.minHeight = "0";
    },
    enter(el) {
      el.offsetWidth;
      el.style.transition = " all ease .3s ";
      el.style.minHeight = "100px";
    },
    leave(el) {
      el.style.transition = " all ease .3s .3s";
      el.style.minHeight = "0";
    },
    moveDown() {
      this.downApp = true;
    },
    leaveDown() {
      this.downApp = false;
    },
    beforeEnterDown(el) {
      el.style.height = "0";
    },
    enterDown(el) {
      el.offsetWidth;
      el.style.transition = " all ease .3s ";
      el.style.height = "158px";
    },
    leaveDownA(el) {
        el.style.transition = " all ease .3s ";
        el.style.height = "0";
    }
  }
};
</script>
<style scoped>
a {
  color: #b0b0b0;
}
a:hover {
  color: #ffffff;
}
.section {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #333333;
}
.section ul li {
  float: left;
}
.section ul li:nth-child(even) {
  width: 1px;
  height: 16px;
  margin: 12px 8px;
  background: #424242;
}
.section .fr ul li:last-child {
  position: relative;
  text-align: center;
  background-color: #ff6700;
  width: 120px;
  color: #ffffff;
  cursor: default;
}
.section .fr ul li:last-child:hover {
  background-color: #ffffff;
  color: #ff6700;
}
.section .fr ul li:last-child span {
  cursor: pointer;
  display: block;
}
.gouwuche {
  width: 316px;
  position: absolute;
  left: -196px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}
.downLi {
  position: relative;
}
.downLi:hover::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #ffffff;
}
.downApp {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  z-index: 99999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 125px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}
.downApp img {
  width: 85px;
  height: 85px;
}
.downApp span{
    color: black;
}
</style>
