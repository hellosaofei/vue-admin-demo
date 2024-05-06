<template>
  <el-row :gutter="10" class="static-container">
    <el-col :sm="6" :xs="24">
      <StasticCard ref_name="numScroll1" :cardInfo="stasticData[0]" />
    </el-col>
    <el-col :sm="6" :xs="24">
      <StasticCard ref_name="numScroll2" :cardInfo="stasticData[1]" />
    </el-col>
    <el-col :sm="6" :xs="24">
      <StasticCard ref_name="numScroll3" :cardInfo="stasticData[2]" />
    </el-col>
    <el-col :sm="6" :xs="24">
      <StasticCard ref_name="numScroll4" :cardInfo="stasticData[3]" />
    </el-col>
  </el-row>
</template>

<script>
import StasticCard from "./StasticCard.vue";

export default {
  name: "App",
  components: {
    StasticCard,
  },
  props: {
    stasticData: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style>
/* .container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
} */
.static-container {
  margin-bottom: 20px;
}
</style>
