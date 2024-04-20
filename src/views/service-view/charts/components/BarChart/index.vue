<template>
  <content-card cardName="柱状图">
    <div id="chartArea" style="width: 100%; height: 300px"></div>
  </content-card>
</template>

<script>
import ContentCard from "@/components/ContentCard/index.vue";
export default {
  name: "BarChart",
  components: {
    ContentCard,
  },
  data() {
    return {
      chartInstance: null,
      data: [57, 20, 30, 70],
      timer: null,
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
      this.chartInstance = this.$echarts.init(
        document.getElementById("chartArea")
      );

      const initOption = {
        xAxis: {
          data: ["衬衫", "羊毛衫", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.data,
          },
        ],
      };

      this.chartInstance.setOption(initOption);
    },

    updateChart() {
      const newData = this.data.map((item) => {
        return (Math.random() * 100).toFixed(2);
      });

      this.chartInstance.setOption({
        series: [
          {
            data: newData,
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
