<template>
  <div class="app-container">
    <p>URL</p>
    <el-input
      v-model="inputData"
      placeholder="请输入内容"
      clearable
      style="width: 60%"
    ></el-input>
    <p>二维码</p>
    <div class="qrcode-area">
      <canvas id="canvas_area"></canvas>
    </div>
    <p>操作</p>
    <div class="button-container">
      <el-button
        type="success"
        v-clipboard:copy="inputData"
        v-clipboard:success="handleCopy"
      >
        复制
      </el-button>
      <el-button type="info" v-on:click="reset">重置</el-button>
      <el-button type="warning" v-on:click="clear">清空</el-button>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";
export default {
  name: "ShareCom",
  data() {
    return {
      inputData: "http://www.baidu.com",
      qrcode: null,
    };
  },
  mounted() {
    this.generateQrCode(this.inputData);
  },
  watch: {
    inputData: {
      handler: function (val, oldVal) {
        if (!this.isValidURL(val)) {
          this.$message({
            message: "请输入正确的网址",
            type: "warning",
          });
          return;
        }
        let target_string = val;
        this.generateQrCode(target_string);
      },
      immediate: true,
    },
  },
  methods: {
    isValidURL(str) {
      try {
        new URL(str);

        return true;
      } catch (_) {
        return false;
      }
    },
    handleCopy() {
      this.$message({
        message: "复制成功",
        type: "success",
        duration: 1500,
      });
    },
    handleCut() {
      this.$message({
        message: "剪切成功",
        type: "success",
        duration: 1500,
      });
    },
    generateQrCode(string) {
      var canvas = document.getElementById("canvas_area");
      var opts = {
        errorCorrectionLevel: "H",
        quality: 0.3,
        margin: 1,
        width: 250,
        color: {
          dark: "#000000FF",
          light: "#FFFFFFFF",
        },
      };
      QRCode.toCanvas(canvas, string, opts, function (error) {
        if (error) {
          throw new Error(error);
        }
      });
    },
    reset() {
      this.inputData = "http://www.baidu.com";
    },
    clear() {
      this.inputData = "";
    },
  },
};
</script>

<style>
.qrcode-area {
  width: 250px;
  height: 250px;
  border-radius: 5px;
  border: #f2f4f6 solid 2px;
}
</style>
