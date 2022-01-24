 <template id='addTmp'>
  <el-card shadow="hover">
    <el-form :model="addForm" ref="addFormRef" label-width="80px" :rules="addFormRules">
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="addForm.name"></el-input>
      </el-form-item>
      <el-form-item label="商品图片" prop="src">
        <el-input v-model="addForm.src"></el-input>
      </el-form-item>
      <el-form-item label="库存" prop="kucun">
        <el-row type="flex" justify="center">
          <el-button @click=" addForm.kucun = addForm.kucun>0? addForm.kucun-1:0">-</el-button>
          <el-input type="number" min="0" v-model="addForm.kucun"></el-input>
          <el-button @click="addForm.kucun += 1">+</el-button>
        </el-row>
      </el-form-item>
      <el-form-item class="add_btn">
        <el-button type="primary" @click="add">添加</el-button>
        <el-button type="info" @click='resetAddForm'>重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import {guid} from '../../js/publicJS.js'
export default {
  data() {
    return {
      addForm: { name: "", kucun: 0, src: "" },
      addFormRules: {
        name: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        kucun: [{ type: "number", message: "库存必须为数值", trigger: "blur" }],
        src: [{ required: true, message: "请输入图片地址", trigger: "blur" }]
      }
    }
  },
  methods: {
    add() {
      var list = {id:guid(),name:this.addForm.name,src:this.addForm.src,kucun:this.addForm.kucun}
      this.$emit('plist',list)  //调用父组件 plist 方法
      this.$refs.addFormRef.resetFields();
    },
    resetAddForm(){
        this.$refs.addFormRef.resetFields();
    }
  },
};
</script>
<style scoped>
</style>