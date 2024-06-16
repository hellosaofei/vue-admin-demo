<template>
  <div class="container">
    <div class="carousel" id="carouselBasis">
      <div class="item">
        <a href=""><img src="./images/1.jpg" alt="" /></a>
      </div>
      <div class="item">
        <a href=""><img src="./images/2.jpg" alt="" /></a>
      </div>
      <div class="item">
        <a href=""><img src="./images/3.jpeg" alt="" /></a>
      </div>
      <div class="item">
        <a href=""><img src="./images/4.jpg" alt="" /></a>
      </div>
    </div>
    <div id="indicatorBasis" class="indicator">
      <span class="active"></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      indicators: null,
      carousel: null,
    };
  },
  mounted() {
    this.indicators = document.querySelectorAll("#indicatorBasis span");
    this.carousel = document.querySelector("#carouselBasis");
    this.indicators.forEach((item, index) => {
      item.onclick = () => {
        this.moveTo(index);
      };
    });
  },
  methods: {
    moveTo(index) {
      this.carousel.style.transform = `translateX(-${index}00%)`;
      // 清除当前
      const activeSpan = document.querySelector("#indicatorBasis span.active");
      activeSpan.classList.remove("active");
      // 新增
      this.indicators[index].classList.add("active");
    },
  },
};
</script>

<style scoped>
.container {
  width: 500px;
  height: 300px;
  margin: 10px auto;
  overflow: hidden;
  position: relative;
}
.carousel {
  width: 100%;
  height: 100%;
  display: flex;
  transition: 0.6s;
}
.container .carousel img {
  width: 500px;
  height: 300px;
}

.indicator {
  position: absolute;
  bottom: 10px;
  display: flex;
  gap: 10px;
  /* outline: 1px solid #fff; */
  left: 50%;
  transform: translateX(-50%);
}

span {
  width: 20px;
  height: 20px;
  border: 2px solid skyblue;
  border-radius: 50%;
}
span:hover {
  cursor: pointer;
}

span.active {
  background-color: #fff;
  border-color: 2px solid #fff;
}
</style>
