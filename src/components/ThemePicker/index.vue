<template>
  <el-color-picker
    v-model="themeColor"
    :predefine="preDefineColor"
    class="theme-picker"
    popper-class="theme-picker-dropdown"
  />
</template>

<script>
import { setPrimaryColor } from "@/utils/tool.js";
export default {
  name: "ThemePicker",
  data() {
    return {
      preDefineColor: [
        "#4E88F3",
        "#1E90FF",
        "#F01414",
        "#7B40F2",
        "#6954F0",
        "#009688",
        "#07C160",
        "#16BAA9",
        "#3FB884",
      ],
      themeColor: "#409EFF",
    };
  },
  watch: {
    themeColor: function (value) {
      setPrimaryColor(value);
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

<style>
/* 使得el-picker在最上方显示 */
.theme-message,
.theme-picker-dropdown {
  z-index: 99999 !important;
}

.theme-picker .el-color-picker__trigger {
  height: 26px !important;
  width: 26px !important;
  padding: 2px;
}

.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>
