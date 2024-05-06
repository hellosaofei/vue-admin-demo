<template>
  <div :ref="ref_name" class="numArea"></div>
</template>

<script>
import { CountUp } from "countup.js";
export default {
  name: "CountTo",
  data() {
    return {
      countInstance: null,
    };
  },
  props: {
    endVal: {
      type: Number,
      default: 2000,
    },
    options: {
      type: Object,
      default: () => {
        return {
          startVal: 20, //起始值
          decimalPlaces: 0, //小数位数
          duration: 5, //动画持续时间
          separator: ",", //采用分组形式表示数字时，用什么符号进行分割，默认为逗号(,)
          prefix: "", //前缀，如￥12345
          suffix: "", //后缀，如12345元
        };
      },
    },
    ref_name: {
      type: String,
      default: "numScroll",
    },
  },
  watch: {
    options: {
      handler: function (newVal, oldVal) {
        this.createInstance();
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    this.createInstance();
    this.startAni();
  },
  methods: {
    createInstance() {
      this.countInstance = new CountUp(
        this.$refs[this.ref_name],
        this.endVal,
        this.options
      );
    },
    startAni() {
      this.countInstance.start();
    },
    resetAni() {
      this.countInstance.reset();
    },
    stopOrResume() {
      this.countInstance.pauseResume();
    },
  },
};
</script>

<style scoped lang="scss">
.numArea {
  font-size: 30px;
}
#numScroll {
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(to right, #3a1c71, #ffaf7b);
  -webkit-background-clip: text; /* Chrome, Safari */
  background-clip: text;
  -webkit-text-fill-color: transparent; /* Chrome, Safari */
  color: transparent;
}
</style>
