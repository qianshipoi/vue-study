<template>
  <el-container class="home-container">
    <!-- 顶部 -->
    <el-header>
      <div>管理系统</div>
      <el-button type="info" @click="test">测试</el-button>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse?'64px':'200px'">
        <!-- 折叠按钮 -->
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 菜单 -->
        <el-menu
          background-color="#313743"
          text-color="#fff"
          active-text-color="#3799FF"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="activePath"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont">&#xe655;</i>
              <span>科目一训练</span>
            </template>
            <el-menu-item index="/shangpin" @click="saveNavState('/shangpin')">
              <template slot="title">
                <i class="iconfont">&#xe655;</i>
                <span>选项1</span>
              </template>
            </el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont">&#xe655;</i>
              <span>科目二训练</span>
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主体区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #363D40;
  color: white;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  align-items: center;
}
.el-aside {
  background-color: #313743;
  color: white;
}
.el-main{
  padding: 0
}
.iconfont {
  margin-right: 10px;
}
.el-menu {
  border-right: none;
}
.toggle-button {
  background-color: #495063;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.2em;
  font-size: 14px;
}
</style>

<script>
export default {
  data() {
    return {
      // 是否折叠
      isCollapse: false,
      // 被激活的路由地址
      activePath: ""
    };
  },
  created(){
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    //登出
    logout() {
      window.sessionStorage.clear("token");
      this.$router.push("/login");
    },
    test() {
      this.$http.get("userinfo/getlist").then(result => {
        console.log(result.data);
      });
    },
    //折叠侧边栏
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    //保存激活状态
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath',activePath)
    }
  }
};
</script>