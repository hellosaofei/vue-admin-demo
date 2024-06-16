<template>
  <div class="app-container">
    <ContentCard cardWidth="100%" cardName="ElementUI轮播图">
      <el-carousel indicator-position="inside">
        <el-carousel-item v-for="(item, index) in imageList" :key="index">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </ContentCard>
    <ContentCard cardWidth="100%" cardName="手写js轮播图">
      <CarouselBasis />
    </ContentCard>
    <ContentCard cardWidth="100%" cardName="手写js无缝轮播">
      <CarouselAdvance />
    </ContentCard>
  </div>
</template>

<script>
import CarouselBasis from "./component/CarouselBasis.vue";
import CarouselAdvance from "./component/CarouselAdvance.vue";
import ContentCard from "@/components/ContentCard/index.vue";
export default {
  name: "Carousel",
  components: {
    ContentCard,
    CarouselBasis,
    CarouselAdvance,
  },
  data() {
    return {
      imageList: [
        "https://c.pxhere.com/images/fc/91/e8864aca8b445391ee5801ec74cb-1667506.jpg!d",
        "https://c.pxhere.com/images/fc/91/e8864aca8b445391ee5801ec74cb-1667506.jpg!d",
        "https://c.pxhere.com/images/fc/91/e8864aca8b445391ee5801ec74cb-1667506.jpg!d",
        "https://c.pxhere.com/images/fc/91/e8864aca8b445391ee5801ec74cb-1667506.jpg!d",
      ],
    };
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
