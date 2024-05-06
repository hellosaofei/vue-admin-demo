<template>
  <div class="data-card">
    <el-card class="box-card">
      <div class="top-part">{{ cardInfo.title }}</div>
      <div class="middle-part">
        <CountTo v-bind="$attrs" :endVal="cardInfo.value" />
      </div>
      <div class="right-icon" :class="cardInfo.iconClass">
        <i :class="cardInfo.icon" class="icon-a"></i>
      </div>
      <div class="bottom-part">
        <span style="display: inline-block">自上周以来增长</span>
        <i class="el-icon-top bottom-icon"></i>
        <span style="color: green">{{ cardInfo.up_rate }}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import CountTo from "@/components/CountTo/index.vue";
export default {
  name: "DataCard",
  components: {
    CountTo,
  },
  props: {
    cardInfo: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style>
.box-card {
  /* width: 250px; */
  position: relative;
  padding-bottom: 0 !important;
}
.right-icon {
  position: absolute;
  top: 50px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-a {
  font-size: 45px !important;
}
.middle-part {
  margin: 28px 0 28px;
}
.bottom-part {
  font-size: 12px;
}
.bottom-icon {
  font-size: 12px;
  border-radius: 50%;
  color: #4e88f3;
  background: rgba(78, 136, 243, 0.1);
  margin: 0 5px 0;
}
</style>
