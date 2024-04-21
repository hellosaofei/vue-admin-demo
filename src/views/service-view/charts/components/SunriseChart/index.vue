<template>
  <content-card cardName="旭日图">
    <div ref="sunriseArea" style="width: 100%; height: 300px"></div>
  </content-card>
</template>

<script>
import ContentCard from "@/components/ContentCard/index.vue";
import { data1, data2, initOption } from "./config.js";
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
      currentData: null,
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
      this.chartInstance = this.$echarts.init(this.$refs.sunriseArea);

      this.chartInstance.setOption(initOption);
      this.currentData = data1;
    },

    updateChart() {
      this.currentData = this.currentData === data1 ? data2 : data1;
      this.chartInstance.setOption({
        series: [
          {
            data: this.currentData,
          },
        ],
      });
    },
  },
};
</script>

<style></style>
