<template>
  <div class="app-container">
    <iframe :src="pdfUrl" width="100%" height="100%">
      浏览器不支持使用Iframe预览pdf文件，请下载后预览
      <a :href="pdfUrl">点击下载</a>
    </iframe>
  </div>
</template>

<script>
export default {
  name: "MyPdf",
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_Url,
    };
  },
  computed: {
    pdfUrl() {
      return this.baseUrl + "/files/123.pdf";
    },
  },
};
</script>

<style scoped>
.app-container {
  height: 100vh;
}
</style>
