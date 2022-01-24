<template>
  <div>
    <el-col :span="12" :offset="6" style="height: 100%;">
      <el-card shadow="hover" style="min-height: 90%;">
        <template>
          <el-tabs v-model="activeName">
            <el-tab-pane label="商品列表" name="first">
              <el-col :span="24">
                <el-card shadow="hover">
                  <el-form label-width="40px">
                    <el-form-item label="搜索">
                      <el-input v-model="keysearch"></el-input>
                    </el-form-item>
                  </el-form>
                </el-card>
              </el-col>

              <!-- 商品列表 -->
              <el-col :span="6" v-for="(item,index) in search(keysearch)" :key="index">
                <el-card shadow="hover">
                  <img :src="item.src" class="image" />
                  <div style="padding: 14px;">
                    <span>{{item.name}}</span>
                    <div class="bottom clearfix">
                      <el-button type="text" class="button" @click="info(item.id)">详情</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-tab-pane>
            <el-tab-pane label="添加商品" name="add">
              <el-col :span="24">
                <addshangpin v-on:plist="addlist"></addshangpin>
              </el-col>
            </el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </template>
      </el-card>
    </el-col>

    <div v-show="is_show" class="infos_box">
      <img :src="infos.img" class="infos_img" />
      <div>商品名称:{{infos.name}}</div>
      <div>库存:{{infos.kucun}}</div>
      <el-button type="primary" @click="close">关闭</el-button>
    </div>

    <div :class="moban_class"></div>
  </div>
</template>



<script>
import addshangpin from "./shangpin/add.vue";
import { guid } from "../js/publicJS.js";
export default {
  data() {
    return {
      list: [
        {
          id: guid(),
          name: "番茄薯片",
          src:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1062611392,1663048975&fm=26&gp=0.jpg",
          kucun: 5
        },
        {
          id: guid(),
          name: "浪味仙",
          src:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3960656789,3206917668&fm=26&gp=0.jpg",
          kucun: 4
        },
        {
          id: guid(),
          name: "乐事薯片",
          src:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2544435106,915389423&fm=26&gp=0.jpg",
          kucun: 4
        },
        {
          id: guid(),
          name: "虾条",
          src:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1540112540,1701052466&fm=26&gp=0.jpg",
          kucun: 1
        },
        {
          id: guid(),
          name: "呀土豆",
          src:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3212703868,3833848151&fm=26&gp=0.jpg",
          kucun: 4
        }
      ],
      activeName: "first",
      is_show: false,
      infos: { img: "", name: "", kucun: "" },
      moban_class: "",
      keysearch: ""
    };
  },
  created() {
    var locList = window.localStorage.getItem("footList");

    if (locList == null)
      window.localStorage.setItem("footList", JSON.stringify(this.list));

    this.list = JSON.parse(locList);
  },
  methods: {
    info(id) {
      this.moban_class = "moban";
      var infoss = { img: "", name: "", kucun: "" };
      this.list.forEach(element => {
        if (element.id == id) {
          infoss = {
            img: element.src,
            name: element.name,
            kucun: element.kucun
          };
          return;
        }
      });

      this.infos = infoss;
      this.is_show = !this.is_show;
    },
    close() {
      this.moban_class = "";
      this.infos = { img: "", name: "", kucun: "" };
      this.is_show = false;
    },
    search(keysearch) {
      return this.list.filter(item => {
        if (item.name.includes(keysearch)) return item;
      });
    },
    addlist(obj) {
      this.list.push(obj);
      window.localStorage.setItem("footList", JSON.stringify(this.list));
    }
  },
  components: {
    addshangpin: addshangpin
  }
  //   render: c=>c(addshangpin)
};
</script>

<style scoped>
html,
body,
#app {
  height: 100%;
  padding: 0;
  margin: 0;
}
.image {
  width: 100%;
  display: block;
  height: 200px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}
.infos_box {
  width: 450px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  border: 1px solid rebeccapurple;
  background-color: white;
  border-radius: 5px;
}
.infos_img {
  width: 90%;
  height: 400px;
}
.moban {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
</style>