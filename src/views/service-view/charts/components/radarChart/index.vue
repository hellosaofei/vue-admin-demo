<template>
  <content-card cardName="雷达图">
    <div ref="radarArea" style="width: 100%; height: 300px"></div>
  </content-card>
</template>

<script>
import ContentCard from "@/components/ContentCard/index.vue";
import updateMixin from "../../mixins/update";
export default {
  name: "RadarChart",
  components: {
    ContentCard,
  },
  mixins: [updateMixin],
  data() {
    return {
      chartInstance: null,
      timer: null,
      data: [42, 30, 20, 35, 50, 18],
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
  computed: {},
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.radarArea);
      let initOption = {
        radar: {
          indicator: [
            { max: 100 },
            { max: 100 },
            { max: 100 },
            { max: 100 },
            { max: 100 },
            { max: 100 },
          ],
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: this.data,
              },
            ],
            pointer: {
              show: false,
            },
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },

    updateChart() {
      this.data = this.data.map((item) => {
        return (Math.random() * 100).toFixed(2);
      });
      this.chartInstance.setOption({
        series: [
          {
            data: [
              {
                value: this.data,
              },
            ],
          },
        ],
      });
    },
    startInterval() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        this.updateChart();
      }, 3000);
    },
  },
};
</script>

<style></style>
