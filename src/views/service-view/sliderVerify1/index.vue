<template>
  <div class="app-container">
    <slide-verify
      :l="42"
      :r="10"
      :w="310"
      :h="155"
      ref="slideblock"
      @again="onAgain"
      @fulfilled="onFulfilled"
      @success="onSuccess"
      @fail="onFail"
      @refresh="onRefresh"
      :slider-text="text"
      :accuracy="accuracy"
      :imgs="imgs"
    ></slide-verify>
  </div>
</template>

<script>
// import SlideVerify from "vue-monoplasty-slide-verify";

export default {
  name: "SliderVerify",

  data() {
    return {
      text: "向右滑动->", // 设置滑块文字
      // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
      accuracy: 2,
      imgs: [
        "https://img1.baidu.com/it/u=1890390320,3399874998&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
        "https://img1.baidu.com/it/u=1546227440,2897989905&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
        "https://lmg.jj20.com/up/allimg/1113/052420110515/200524110515-1-1200.jpg",
        "https://lmg.jj20.com/up/allimg/1114/0G020114924/200G0114924-11-1200.jpg",
      ],
    };
  },
  methods: {
    // 验证通过
    onSuccess(times) {
      setTimeout(() => {
        this.$refs.slideblock.reset();
      }, 2000);
      this.$message({
        showClose: true,
        message: `验证通过，耗时${times}毫秒"`,
        type: "success",
      });
    },
    // 验证失败
    onFail() {
      this.$message({
        showClose: true,
        message: "验证失败",
        type: "error",
      });
    },
    // 滑块上的刷新
    onRefresh() {
      this.$message({
        showClose: true,
        message: "验证码刷新成功",
        type: "success",
      });
    },
    // 刷新后执行的回调函数
    onFulfilled() {},
    // 检测是否人为操作
    onAgain() {
      this.$message({
        showClose: true,
        message: "非本人操作",
        type: "warning",
      });
      this.msg = "try again";
      // 刷新
      this.$refs.slideblock.reset();
    },
    // 重置刷新
    handleClick() {
      this.$refs.slideblock.reset();
    },
  },
};
</script>

<style></style>
