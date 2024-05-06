<template>
  <div class="app-container">
    <StasticContainer v-if="stasticData" :stasticData="stasticData" />
    <Chart v-if="chartData" :chartData="chartData" />
  </div>
</template>

<script>
import StasticContainer from "./components/StasticContainer.vue";
import Chart from "./components/Chart.vue";
import { getList } from "@/api/stastic.js";

export default {
  name: "StasticPanel",
  components: {
    Chart,
    StasticContainer,
  },
  data() {
    return {
      stasticData: null,
      chartData: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await getList();
      const { chart_data, stastic_data } = res.data;
      this.stasticData = stastic_data;
      this.chartData = chart_data;
    },
  },
};
</script>

<style></style>
