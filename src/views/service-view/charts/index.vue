<template>
  <div class="app-container chart-container">
    <BarChart />
    <ScatterChart />
    <ScoreRing />
    <RadarChart />
    <SunriseChart />
  </div>
</template>

<script>
import {
  BarChart,
  ScatterChart,
  ScoreRing,
  RadarChart,
  SunriseChart,
} from "./components/index.js";
export default {
  name: "MyChart",
  components: {
    BarChart,
    ScatterChart,
    ScoreRing,
    RadarChart,
    SunriseChart,
  },
};
</script>

<style scoped lang="scss">
.chart-container {
  display: flex;
  flex-wrap: wrap;
  div {
    margin: 10px;
  }
}
</style>
