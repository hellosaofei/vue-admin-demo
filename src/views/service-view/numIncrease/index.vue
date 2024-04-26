<template>
  <div class="app-container">
    <div class="count-container">
      <numComponent :options="countOptions" :endVal="endVal" ref="countCom" />
    </div>
    <div class="operate-panel">
      <div class="item">
        <span>起始值</span>
        <el-input-number
          v-model="countOptions.startVal"
          @change="handleChange"
          :min="0"
          :max="1000"
          :step="100"
        ></el-input-number>
      </div>
      <div class="item">
        <span>终止值</span>
        <el-input-number
          v-model="endVal"
          @change="handleChange"
          :min="2000"
          :max="2200"
          :step="20"
        ></el-input-number>
      </div>
      <div class="item">
        <span style="display: inline-block">持续时间</span>
        <el-input-number
          v-model="countOptions.duration"
          @change="handleChange"
          :min="3"
          :max="8"
        ></el-input-number>
      </div>
      <div class="item">
        <span>前置符号</span>
        <el-input
          style="width: 60%"
          v-model="countOptions.prefix"
          @input="handleChange"
          placeholder="前置符号"
        ></el-input>
      </div>
      <div class="item">
        <span>后置符号</span>
        <el-input
          style="width: 60%"
          v-model="countOptions.suffix"
          @input="handleChange"
          placeholder="后置符号"
        ></el-input>
      </div>
      <div class="item">
        <span>小数位数</span>
        <el-input-number
          v-model="countOptions.decimalPlaces"
          @change="handleChange"
          :min="0"
          :max="2"
        ></el-input-number>
      </div>
    </div>
    <div class="operate-btn">
      <el-button v-on:click="handleStart">开始</el-button>
      <el-button v-on:click="handleReset">重置</el-button>
      <el-button v-on:click="handlePause">暂停/恢复</el-button>
    </div>
  </div>
</template>

<script>
import numComponent from "./components/numComponent.vue";
export default {
  name: "CountDemo",
  data() {
    return {
      endVal: 2000,
      countOptions: {
        startVal: 20, //起始值
        decimalPlaces: 0, //小数位数
        duration: 5, //动画持续时间
        separator: ",", //采用分组形式表示数字时，用什么符号进行分割，默认为逗号(,)
        prefix: "￥", //前缀，如￥12345
        suffix: "元", //后缀，如12345元
      },
    };
  },
  components: {
    numComponent,
  },
  methods: {
    handleChange() {},
    handleStart() {
      this.$refs.countCom.startAni();
    },
    handleReset() {
      this.$refs.countCom.resetAni();
    },
    handlePause() {
      this.$refs.countCom.stopOrResume();
    },
  },
};
</script>

<style scoped lang="scss">
/*countUp数字容器*/
.count-container {
  text-align: center;
  margin-bottom: 50px;
}
/* 控制面板*/
.operate-panel {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}
.item {
  text-align: center;
  span:first-child {
    margin-right: 5px;
  }
}
/*开始按钮*/
.operate-btn {
  display: flex;
  justify-content: space-around;
}
</style>
