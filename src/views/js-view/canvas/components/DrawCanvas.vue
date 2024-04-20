<template>
  <canvas
    ref="canvas"
    width="800"
    height="700"
    @mousedown="handleDown($event)"
    @mouseup="handleUp()"
    @mousemove="handleMove($event)"
  ></canvas>
</template>

<script>
export default {
  name: "DrawCanvas",
  data() {
    return {
      ctx: null,
      canvas: null,
      x: undefined, //画笔坐标
      y: undefined,
      isPressed: false, //鼠标是否落下
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.$refs.canvas.getContext("2d");
  },
  props: {
    penSize: {
      type: Number,
      default: 10,
    },
    penColor: {
      type: String,
      default: "black",
    },
  },
  methods: {
    //此处的offSetX/Y是鼠标相当于canvas元素左上角的位置
    handleDown(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.isPressed = true;
    },
    // 鼠标松开，将画笔（x,y）坐标清空，ispress标志设置为false
    handleUp() {
      this.x = undefined;
      this.y = undefined;
      this.isPressed = false;
    },
    // 鼠标移动时，更新画笔位置
    handleMove(e) {
      if (this.isPressed) {
        let x2 = e.offsetX;
        let y2 = e.offsetY;
        //此处添加即画圆又画线条是因为只画线条会出现断断续续的情况，绘制实心圆使线条更加饱满
        this.drawCircle(x2, y2);
        this.drawLine(this.x, x2, this.y, y2);
        //绘制完线条之后，调整画笔当前位置为当前鼠标的坐标
        (this.x = x2), (this.y = y2);
      }
    },
    //定义绘制线条和实心圆的函数
    drawCircle(x, y) {
      this.ctx.beginPath();
      this.ctx.arc(x, y, this.penSize, 0, Math.PI * 2);
      this.ctx.fillStyle = this.penColor;
      this.ctx.fill();
    },
    drawLine(x1, x2, y1, y2) {
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.strokeStyle = this.penColor;
      this.ctx.lineWidth = this.penSize * 2;
      this.ctx.stroke();
    },
    handleClear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    handleSave() {
      let imageDataUrl = this.canvas.toDataURL(); // 返回Base64编码的图像数据URL
      this.downloadURI(imageDataUrl, "output_image.png"); // 输入自定义的文件名及格式（此处为PNG）
    },
    downloadURI(uri, name) {
      var link = document.createElement("a");
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
    },
  },
};
</script>
<style scoped>
canvas {
  border: 2px solid skyblue;
}
</style>
