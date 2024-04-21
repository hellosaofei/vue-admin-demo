<template>
  <content-card cardName="得分环">
    <div ref="scoreArea" style="width: 100%; height: 300px"></div>
  </content-card>
</template>

<script>
import ContentCard from "@/components/ContentCard/index.vue";
import { gaugeData, initOption } from "./config.js";

import updateMixin from "../../mixins/update";
export default {
  name: "ScoreRing",
  components: {
    ContentCard,
  },
  mixins: [updateMixin],
  data() {
    return {
      chartInstance: null,
      timer: null,
      data: [],
    };
  },
  mounted() {
    this.initChart();
    this.startInterval();
  },
  destroyed() {
    clearInterval(this.timer);
  },

  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.scoreArea);
      this.chartInstance.setOption(initOption);
      this.data = gaugeData;
    },

    updateChart() {
      this.data.forEach((_, index) => {
        this.data[index].value = +(Math.random() * 100).toFixed(2);
      });
      this.chartInstance.setOption({
        series: [
          {
            data: this.data,
          },
        ],
      });
    },
  },
};
</script>

<style></style>
