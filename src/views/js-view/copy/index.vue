<template>
  <div class="app-container">
    <el-input
      v-model="inputData"
      placeholder="请输入内容"
      class="input"
    ></el-input>
    <el-button
      type="primary"
      v-clipboard:copy="inputData"
      v-clipboard:success="handleCopy"
    >
      点击复制
    </el-button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      inputData: "",
    };
  },
  methods: {
    handleCopy() {
      this.$message({
        message: "复制成功",
        type: "success",
        duration: 1500,
      });
    },
  },
};
</script>

<style scoped>
.input {
  width: 60%;
  margin-right: 20px;
}
</style>
