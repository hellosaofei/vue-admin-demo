<template>
  <div class="container">
    <div class="image-box">
      <img
        class="image"
        :src="imageUrl"
        id="image"
        alt=""
        @mouseover="showMagnifier"
        @mouseout="hideMagnifier"
        @mousemove="moveMagnifier"
      />
      <div
        class="magnifier"
        :style="magnifierStyle"
        v-show="isMagnifierVisible"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Magnifier",
  data() {
    return {
      //   imageObj: document.getElementById("image"),
      imageUrl:
        "https://cdn.pixabay.com/photo/2024/04/22/17/03/ai-generated-8713076_1280.png",
      isMagnifierVisible: false,
      mouseX: 0,
      mouseY: 0,
      magnifierWidth: 100, // 假设放大镜的宽度
      magnifierHeight: 100, // 假设放大镜的高度
    };
  },
  mounted() {
    this.$nextTick(() => {
      //   this.imageObj =;
    });
  },
  computed: {
    magnifierStyle() {
      const magnifierBackgroundSize = `${this.imageWidth * 2}px ${
        this.imageHeight * 2
      }px`;
      const positionX = this.mouseX - this.magnifierWidth / 2;
      const positionY = this.mouseY - this.magnifierHeight / 2;
      const backgroundPositionX = -positionX * 2;
      const backgroundPositionY = -positionY * 2;

      return {
        background: `url(${this.imageUrl})`,
        backgroundSize: magnifierBackgroundSize,
        left: `${positionX}px`,
        top: `${positionY}px`,
        backgroundPositionX: `${backgroundPositionX}px`,
        backgroundPositionY: `${backgroundPositionY}px`,
        visibility: this.isMagnifierVisible ? "visible" : "hidden",
      };
    },
    imageWidth() {
      // 假设你有一种方式来获取图片的宽度，例如通过 CSS 的宽度或者实际图片的宽度
      // 这里只是作为示例，你可能需要根据实际情况调整
      //   offsetWidth
      return 400; // 假设图片的宽度是 300px
    },
    imageHeight() {
      // 同上，假设图片的高度是 200px
      return 400;
    },
  },
  methods: {
    showMagnifier() {
      this.isMagnifierVisible = true;
    },
    hideMagnifier() {
      this.isMagnifierVisible = false;
    },
    moveMagnifier(e) {
      // 在 Vue 中，你可能需要处理事件对象以获取鼠标的位置
      // 这里假设你有一个方法来获取鼠标相对于图片的位置
      // 你可以通过事件冒泡和自定义方法来获取这些值，或者通过其他方式
      this.mouseX = e.offsetX; // 注意：offsetX 可能不是标准属性，你可能需要计算它
      this.mouseY = e.offsetY; // 同上
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.image-box {
  position: relative;
}

.image {
  display: block;
  /* max-width: 100%; */
  width: 400px;
  height: 400px;
  /* height: 100vh; */
}

.magnifier {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 50%;
  pointer-events: none;
  visibility: hidden;
  z-index: 1;
}
</style>
