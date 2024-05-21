<template>
  <el-color-picker
    v-model="themeColor"
    :predefine="preDefineColor"
    class="theme-picker"
    popper-class="theme-picker-dropdown"
  />
</template>

<script>
export default {
  name: "ThemePicker",
  data() {
    return {
      preDefineColor: [
        "#409EFF",
        "#1890ff",
        "#304156",
        "#212121",
        "#11a983",
        "#13c2c2",
        "#6959CD",
        "#f5222d",
      ],
      themeColor: "#409EFF",
    };
  },
  watch: {
    themeColor: function (value) {
      this.updateThemeColor(value);
    },
  },
  methods: {
    updateThemeColor(hexStr) {
      document.documentElement.style.setProperty(
        "--v2-color-primary",
        this.hexToRgb(hexStr)
      );
    },
    hexToRgb(hex) {
      // 确保十六进制颜色代码以#开头
      hex = hex.replace(/^#?/, "#");

      // 检查长度，如果是3位数，则转换为6位数
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }

      // 分解颜色为RGB部分
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);

      return `rgb(${r}, ${g}, ${b})`;
    },
  },
};
</script>

<style></style>
