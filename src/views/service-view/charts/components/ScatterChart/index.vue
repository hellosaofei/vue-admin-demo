<template>
  <content-card cardName="散点图">
    <div ref="scatterArea" style="width: 100%; height: 300px"></div>
  </content-card>
</template>

<script>
import ContentCard from "@/components/ContentCard/index.vue";
import { scatterOption, barOption } from "./config.js";
import updateMixin from "../../mixins/update";
export default {
  name: "ScatterChart",
  components: {
    ContentCard,
  },
  mixins: [updateMixin],
  data() {
    return {
      chartInstance: null,
      timer: null,
      currentOption: null,
    };
  },
  mounted() {
    this.initChart();
    this.startInterval();
  },
  destroyed() {
    clearInterval(this.timer);
  },
  computed: {
    scatterOption() {
      return scatterOption;
    },
    barOption() {
      return barOption;
    },
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.scatterArea);

      this.chartInstance.setOption(this.scatterOption);
      this.currentOption = this.scatterOption;
    },

    updateChart() {
      this.currentOption =
        this.currentOption === this.scatterOption
          ? this.barOption
          : this.scatterOption;
      this.chartInstance.setOption(this.currentOption, true);
    },
  },
};
</script>

<style></style>
