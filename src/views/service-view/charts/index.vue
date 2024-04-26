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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
}
</style>
