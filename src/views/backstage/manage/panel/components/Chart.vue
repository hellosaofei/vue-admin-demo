<template>
  <content-card cardName="后台管理" cardWidth="100%">
    <div ref="chartArea1" style="height: 400px"></div>
  </content-card>
</template>

<script>
import ContentCard from "@/components/ContentCard/index.vue";

export default {
  name: "ChartTest",
  components: {
    ContentCard,
  },
  data() {
    return {
      chartInstance: null,
      timer: null,
      startValue: 0,
      endValue: 6,
    };
  },
  props: {
    chartData: {
      type: Object,
      require: true,
    },
  },
  computed: {
    xAxisData() {
      return this.chartData["year_data"];
    },
    yAxisData() {
      return this.chartData["value_data"];
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
      this.startInterval();
    });
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.chartArea1);
      const initOption = {
        title: [
          {
            text: "总成交额",
            top: "1%",
            left: "8%",
            textStyle: {
              color: "#ccc",
              fontSize: 12,
            },
            subtext: "8,888,888",
            subtextStyle: {
              fontSize: 18,
              color: "#000",
            },
          },
          {
            text: "手续费用（元）",
            top: "1%",
            left: "37%",
            textStyle: {
              color: "#ccc",
              fontSize: 12,
            },
            subtext: "4,313",
            subtextStyle: {
              fontSize: 18,
              color: "#000",
            },
          },
          {
            text: "运营账户（元）",
            top: "1%",
            left: "67%",
            textStyle: {
              color: "#ccc",
              fontSize: 12,
            },
            subtext: "12,902",
            subtextStyle: {
              fontSize: 18,
              color: "#000",
            },
          },
        ],
        xAxis: {
          type: "category",
          data: this.xAxisData.slice(this.startValue, this.endValue),
          axisTick: {
            show: false, //隐藏X轴刻度
          },
          boundaryGap: false,
        },
        yAxis: {
          type: "value",
        },
        tooltip: {
          trigger: "axis",
          formatter: (params) => {
            let str = `${params[0].name}<br/>`;
            for (let i = 0; i < params.length; i++) {
              str =
                str +
                `<span style='display:inline-block;
                  margin-right:5px;
                  border-radius:10px;
                  width:9px;
                  height:9px;
                  background-color:${params[i].color}'>
                </span>
                交易单量  ${params[i].value}单<br/>`;
            }
            return str;
          },
        },
        grid: {
          top: "18%", //上边距
          right: "2%", //右边距
          left: "2%", //左边距
          bottom: "2%", //下边距
          containLabel: true,
        },
        series: [
          {
            type: "line",
            data: this.yAxisData.slice(this.startValue, this.endValue),
            smooth: true,
            label: {
              show: true,
              position: "top",
              distance: 10,
              color: "#222",
              fontFamily: "Arial",
              fontSize: 15,
              borderColor: "inherit",
            },
            lineStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(0, 221, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(77, 119, 255)",
                },
              ]),
            },
            showSymbol: false, //是否显示小圆点
            markPoint: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(0, 221, 255)",
                  },
                  {
                    offset: 1,
                    color: "rgb(77, 119, 255)",
                  },
                ]),
              },
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(0, 221, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(77, 119, 255)",
                },
              ]),
            },
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    updateChart() {
      const dataOption = {
        dataZoom: {
          show: false,
          startValue: this.startValue,
          endValue: this.endValue,
        },
        xAxis: {
          data: this.xAxisData,
        },
        series: [
          {
            data: this.yAxisData,
          },
        ],
      };
      this.chartInstance.setOption(dataOption);
    },
    startInterval() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        this.startValue++;
        this.endValue++;
        if (this.endValue > this.xAxisData.length - 1) {
          this.endValue = 6;
          this.startValue = 0;
        }
        this.updateChart();
      }, 3000);
    },
  },
};
</script>

<style></style>
