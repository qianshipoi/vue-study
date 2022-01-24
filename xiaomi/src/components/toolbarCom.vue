<template>
  <div class="toolbar">
    <a href="javascript:;" @mousemove="movedown()" @mouseleave="leavedown()">
      <i class="iconfont">&#xe643;</i>
      <span>手机APP</span>
      <transition>
        <div class="downApp" v-show="downApp">
          <img src="https://i8.mifile.cn/b2c-mimall-media/93650133310ec1c385487417a472a26c.png" />
          <span>
            手机扫一扫
            <br />一分享好礼
          </span>
        </div>
      </transition>
    </a>
    <a href="javascript:;">
      <i class="iconfont">&#xe64e;</i>
      <span>个人中心</span>
    </a>
    <a href="javascript:;">
      <i class="iconfont">&#xe62e;</i>
      <span>售后服务</span>
    </a>
    <a href="javascript:;">
      <i class="iconfont">&#xe64f;</i>
      <span>人工客服</span>
    </a>
    <a href="javascript:;">
      <i class="iconfont">&#xe63c;</i>
      <span>购物车</span>
    </a>
    <a href="#">
      <i class="iconfont">&#xe65e;</i>
      <span>回到顶部</span>
    </a>
  </div>
</template>

<script>
export default {
    data(){return{
        downApp:false
    }},
    methods:{
        movedown(){this.downApp=true},
        leavedown(){this.downApp=false}
    }
};
</script>

<style scoped>
.toolbar {
  position: fixed;
  z-index: 999;
  right: 0;
  top: 350px;
  width: 85px;
  height: 560px;
  background-color: transparent;
  font-size: 14px;
}
.toolbar a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 90px;
  background-color: #ffffff;
  border: 1px solid #f5f5f5;
}
.toolbar a:first-child {
  position: relative;
}
.toolbar a:last-child {
  margin-top: 20px;
}
.iconfont {
  font-size: 24px;
  cursor: pointer;
}
.downApp {
  position: absolute;
  right: 110%;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 130px;
  height: 190px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
}
.downApp::after {
  content: "";
  position: absolute;
  left: 100%;
  top: 20%;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-left-color: #ffffff;
}
.downApp img {
  width: 96px;
  height: 96px;
}
.downApp span {
  color: #999999;
}
.v-enter,
.v-leave-to{
    opacity: 0;
}
.v-enter-active,
.v-leave-active{
    transition: opacity .3s;
    
}
</style>