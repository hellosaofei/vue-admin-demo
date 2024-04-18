<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ cardName }}</span>
    </div>
    <slot />
  </el-card>
</template>

<script>
export default {
  name: "ContentCard",
  data() {
    return {};
  },
  props: {
    cardName: {
      type: String,
      default: "内容卡片",
    },
  },
};
</script>

<style>
.box-card {
  width: 480px;
  padding-bottom: 18px;
}
</style>
