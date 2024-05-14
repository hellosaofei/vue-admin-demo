<template>
  <div class="app-container">
    <content-card cardName="原生JS实现排序" cardWidth="100%">
      <DragEle />
    </content-card>
  </div>
</template>

<script>
import ContentCard from "@/components/ContentCard/index.vue";
import DragEle from "./DragEle.vue";
export default {
  name: "",
  components: {
    ContentCard,
    DragEle,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
