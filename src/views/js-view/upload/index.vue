<template>
  <div class="app-container">
    <input type="file" @change="handleFileChange" />
    <el-button @click="handleUpload">upload</el-button>
    <p class="tips">tips:文件大小不得大于100MB,上传一个视频文件查看效果吧</p>

    <div>
      <div>
        <div>文件切片进度</div>
        <el-progress :percentage="percentage.slicePercentage"></el-progress>
      </div>
      <div>
        <div>计算文件hash值</div>
        <el-progress :percentage="percentage.hashPercentage"></el-progress>
      </div>
      <div>
        <div>文件上传进度</div>
        <el-progress :percentage="percentage.uploadPercentage"></el-progress>
      </div>
    </div>
    <p class="tips" v-if="resultURL">
      您的文件上传成功，请访问：{{ resultURL }}
    </p>
  </div>
</template>

<script>
import SparkMD5 from "spark-md5";
import { uploadFile, mergeFile } from "@/api/upload";

const ChunkSize = 1 * 1024 * 1024;
const MAXFileSize = 100 * 1024 * 1024;

export default {
  name: "Upload",
  data: () => {
    return {
      container: {
        file: null,
        filename: "",
        extension: "",
        hash: "",
      },
      count: 0, // 用于进行chunk计数
      chunkList: [], // 存放文件切片
      data: [], // 要传递给后端的数据
      spark: null,
      percentage: {
        slicePercentage: 0,
        uploadPercentage: 0,
        hashPercentage: 0,
      },
      resultURL: "",
    };
  },
  mounted() {
    this.spark = new SparkMD5.ArrayBuffer();
  },
  methods: {
    calculateMD5() {
      const reader = new FileReader();
      reader.readAsArrayBuffer(this.chunkList[this.count].file);
      reader.onload = (e) => {
        this.count++;
        this.percentage.hashPercentage = this.calculatePercentage(
          this.count,
          this.chunkList.length
        );
        this.spark.append(e.target.result);
        if (this.count === this.chunkList.length) {
          this.container.hash = this.spark.end();
          self.close();
        } else {
          this.calculateMD5();
        }
      };
    },
    calculatePercentage(cur, total) {
      if (cur >= total) {
        cur = total;
      }
      return parseInt((cur / total) * 100);
    },
    // 存储文件对象
    handleFileChange(e) {
      const [file] = e.target.files;
      if (!file) {
        return;
      }
      if (file.size > MAXFileSize) {
        this.$message({
          type: "error",
          message: "文件大小不得大于100MB",
        });
        return;
      }
      // Object.assign()
      this.container.file = file;
      this.container.filename = file.name.split(".")[0];
      this.container.extension = file.name.split(".")[1];
      this.chunkList = this.createFileChunk(file);
      this.calculateMD5();
    },
    // 将文件分割为切片列表并返回分割结果
    createFileChunk(file) {
      const fileChunkList = [];
      let cur = 0;
      while (cur < file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + ChunkSize) });
        cur += ChunkSize;
        this.percentage.slicePercentage = this.calculatePercentage(
          cur,
          file.size
        );
      }
      return fileChunkList;
    },
    // 上传所有文件切片
    async uploadChunk() {
      const promises = [];
      this.data.forEach((item, index) => {
        const fd = this.createFormData(item);
        this.percentage.uploadPercentage = this.calculatePercentage(
          index + 1,
          this.data.length
        );
        const promise = uploadFile(fd);
        promises.push(promise);
      });
      // 等待所有请求完成
      await Promise.all(promises);
    },
    // 将数据转换为formaData
    createFormData({ name = "", chunk = null, hash = "", extension = "" }) {
      const fd = new FormData();
      fd.append("chunk", chunk);
      fd.append("hash", hash);
      fd.append("filename", name);
      fd.append("extension", extension);
      return fd;
    },
    // 处理点击上传事件
    async handleUpload() {
      if (!this.container.file) {
        return;
      }
      this.data = this.chunkList.map(({ file }, index) => {
        return {
          chunk: file,
          hash: this.container.hash + "-" + index,
          name: this.container.filename,
          extension: this.container.extension,
        };
      });
      await this.uploadChunk();
      await this.mergeRequest();
    },
    // 合并请求
    async mergeRequest() {
      const res = await mergeFile({
        filename: this.container.filename,
        extension: this.container.extension,
        chunkSize: ChunkSize,
      });
      if (res.code === 2000) {
        this.resultURL = res.url;
        this.$message({
          type: "success",
          message: "文件上传成功!",
        });
      }
    },
  },
};
</script>

<style>
.tips {
  font-size: 12px;
  color: #9e9e9e;
}
</style>
