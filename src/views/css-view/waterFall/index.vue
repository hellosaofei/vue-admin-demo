<template>
  <div class="app-container">
    <content-card
      cardName="原生js实现瀑布流"
      cardWidth="100%"
      style="height: 100vh"
    >
      <WaterFall>
        <template #item="{ index }">
          <div
            class="card-box"
            :style="{
              background: colorArr[index % (colorArr.length - 1)],
            }"
          ></div>
        </template>
      </WaterFall>
    </content-card>
  </div>
</template>

<script>
import WaterFall from "./components/WaterFall.vue";
import ContentCard from "@/components/ContentCard/index.vue";
export default {
  name: "waterfalldemo",
  components: {
    WaterFall,
    ContentCard,
  },
  data() {
    return {
      colorArr: [
        "#9B59B6",
        "#C0392B ",
        "#AF7AC5",
        "#2980B9 ",
        "#1ABC9C ",
        "#F1C40F ",
        "#D35400 ",
      ],
    };
  },
};
</script>

<style>
.card-box {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>
