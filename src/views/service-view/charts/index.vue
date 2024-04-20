<template>
  <div class="app-container">
    <BarChart />
    <ScatterChart />
  </div>
</template>

<script>
import BarChart from "./components/BarChart/index.vue";
import ScatterChart from "./components/ScatterChart/index.vue";
export default {
  name: "MyChart",
  components: {
    BarChart,
    ScatterChart,
  },
};
</script>

<style></style>
