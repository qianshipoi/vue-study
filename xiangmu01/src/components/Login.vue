<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头部图片 -->
      <div class="avatar_box">
        <img src="../images/avatar.jpg" alt="头像" />
      </div>
      <!-- 表单区域 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="form_box">
        <!-- 用戶名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-wodejuhuasuan"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <!-- 密碼 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            prefix-icon="iconfont icon-suo"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 按鈕 -->
        <el-form-item class="btnLogins">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoinForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-col :span='6'>
        <el-card class="box-card">
          <el-card class="box-top"></el-card>
          <el-card class="box-main">
          </el-card>
          <el-card class="box-main4">
          </el-card>
          <el-card class="box-main2"></el-card>
          <el-card class="box-main3"></el-card>
          
        </el-card>
      </el-col>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      },
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符之间",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 10,
            message: "长度在 6 到 10 个字符之间",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    resetLoinForm() {
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate(valid => {
        if (!valid) return;
        var data = {
          Account: this.loginForm.username,
          Password: this.loginForm.password
        };
        this.$http.post("userinfo/login", data).then(result => {
          if (result.data.Code !== 200)
            return this.$message.error("用户名或密码不正确");
          this.$message.success("登录成功");
          //将token存入 sessionStorage 中
          window.sessionStorage.setItem("token", result.data.Token);
          this.$router.push("/home");
        });
      });
    }
  }
};
</script>
<style scoped>
.box-card{
  height: 850px;
  background: rgb(225,235,243);
  border-radius: 0;
}
.box-top{
  margin-top: 30px;
  height: 115px;
  border-radius: 15px;
  background: -webkit-linear-gradient(
    left,#558BE4,#38CDDD
  )
}
.box-main{
  height: 250px;
  margin-top: 5px;
  border-radius: 15px 15px 0 0;
  background: -webkit-linear-gradient(
    top,#4c03f7,#00FFFF
  )
}
.box-main4{
  height: 50px;
  background: rgb(240,240,240);
  border-radius: 0 0 15px 15px;
}
.box-main2{
  height: 100px;
  margin-top: 5px;
  border-radius: 15px;
}

.box-main3{
  height: 25px;
  margin-top: 5px;
  border-radius: 15px;
}


.login_container {
  background-color: aqua;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  width: 130px;
  height: 130px;
  border: 10px solid white;
  border-radius: 50%;
  box-shadow: 0 0 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -60%);
}
.avatar_box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.form_box {
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0 20px;
  box-sizing: border-box;
}
.btnLogins {
  display: flex;
  justify-content: flex-end;
}
</style>