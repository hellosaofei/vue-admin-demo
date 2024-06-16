<template>
  <div class="container">
    <div class="carousel" id="carouselAdvance">
      <div class="item bg-r">
        <div>1</div>
      </div>
      <div class="item bg-g">
        <div>2</div>
      </div>
      <div class="item bg-gold">
        <div>3</div>
      </div>
      <div class="item bg-b"><div>4</div></div>
    </div>
    <div class="carousel-arrow arrowLeft" id="arrowLeft">
      <img src="./images/left.png" alt="" />
    </div>
    <div class="carousel-arrow arrowRight" id="arrowRight">
      <img src="./images/right.png" alt="" />
    </div>
    <div class="indicator" id="indicatorAdvance">
      <span class="active"></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselAdvance",
  data: () => {
    return {
      currentIndex: 0,
      count: 0,
      carousel: null,
      indicator: null,
      arrowLeft: null,
      arrowRight: null,
    };
  },
  mounted() {
    this.carousel = document.querySelector("#carouselAdvance");
    this.indicator = document.querySelectorAll("#indicatorAdvance span");
    this.arrowLeft = document.querySelector("#arrowLeft");
    this.arrowRight = document.querySelector("#arrowRight");
    this.initDOM();
    this.indicator.forEach((item, index) => {
      item.onclick = () => {
        this.moveTo(index);
      };
    });
    this.arrowLeft.onclick = this.moveLeft;
    this.arrowRight.onclick = this.moveRight;
  },
  watch: {
    indicator: function (newVal, oldVal) {
      this.count = this.indicator.length;
    },
  },
  methods: {
    initDOM() {
      const firstCloneNode = this.carousel.firstElementChild.cloneNode(true);
      const lastCloneNode = this.carousel.lastElementChild.cloneNode(true);
      this.carousel.appendChild(firstCloneNode);
      this.carousel.insertBefore(
        lastCloneNode,
        this.carousel.firstElementChild
      );

      lastCloneNode.style.marginLeft = "-100%";
    },
    moveTo(index) {
      this.carousel.style.transition = "0.6s";
      this.carousel.style.transform = `translateX(-${index}00%)`;
      // 清除当前
      const activeSpan = document.querySelector(
        "#indicatorAdvance span.active"
      );
      activeSpan.classList.remove("active");
      // 新增
      this.indicator[index].classList.add("active");

      this.currentIndex = index;
    },
    moveRight() {
      if (this.currentIndex === this.count - 1) {
        // console.log("无缝轮播");
        this.carousel.style.transition = "none";

        this.carousel.style.transform = `translateX(100%)`;
        // 等待浏览器渲染：使其跳转到第一张，再完成向左滚动的行为
        // 强制回流
        this.carousel.clientHeight;
        this.moveTo(0);
      } else {
        this.moveTo(this.currentIndex + 1);
      }
    },
    moveLeft() {
      if (this.currentIndex === 0) {
        // console.log("无缝轮播");
        this.carousel.style.transition = "none";

        this.carousel.style.transform = `translateX(-${this.count}00%)`;
        // 等待浏览器渲染：使其跳转到最后一张之后，再完成向左滚动的行为
        // 强制回流（详细说明见 README 文档）
        this.carousel.clientHeight;
        this.moveTo(this.count - 1);
      } else {
        this.moveTo(this.currentIndex - 1);
      }
    },
  },
};
</script>

<style scoped>
.bg-b {
  background-color: skyblue;
}
.bg-r {
  background-color: rosybrown;
}
.bg-g {
  background-color: darkgreen;
}
.bg-gold {
  background-color: darkgoldenrod;
}

/* 主容器 */
.container {
  width: 500px;
  height: 300px;
  margin: 10px auto;
  overflow: hidden;
  position: relative;
  outline: 10px solid #000;
}
/* 轮播图父容器 */
.carousel {
  display: flex;
}
.carousel .item div {
  width: 500px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 左右箭头 */
.carousel-arrow {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #000;
  opacity: 0.2;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel-arrow:hover {
  opacity: 0.5;
}
.carousel-arrow > img {
  width: 30px;
}
.arrowLeft {
  left: 10px;
}
.arrowRight {
  right: 10px;
}

/* 指示器 */
.indicator {
  position: absolute;
  bottom: 10px;
  display: flex;
  gap: 5px;
  /* outline: 1px solid #fff; */
  left: 50%;
  transform: translateX(-50%);
}

/* 每个指示器 */
span {
  width: 20px;
  height: 20px;
  border: 2px solid #fff;
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
