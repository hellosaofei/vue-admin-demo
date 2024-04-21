<template>
  <el-card class="box-card" :style="{ width: cardWidth }">
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
    cardWidth: {
      type: String,
      default: "480px",
    },
  },
};
</script>

<style>
.box-card {
  /* width: 480px; */
  /* height: 350px; */
  padding-bottom: 18px;
}
</style>
