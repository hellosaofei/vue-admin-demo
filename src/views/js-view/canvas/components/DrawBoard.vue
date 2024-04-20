<template>
  <div>
    <DrawCanvas :penColor="pen_color" :penSize="pen_size" ref="DrawCanvas" />
    <div class="toolbox">
      <button ref="decrease" v-on:click="decrease_pen_size">减小</button>
      <span ref="size">10</span>
      <button ref="increase" v-on:click="increase_pen_size">增加</button>
      <input
        type="color"
        ref="color"
        v-on:click="handle_change_color($event)"
      />
      <button ref="save" v-on:click="handle_save">保存</button>
      <button ref="clear" v-on:click="handle_clear">清除</button>
    </div>
  </div>
</template>

<script>
import DrawCanvas from "./DrawCanvas.vue";

export default {
  data() {
    return {
      pen_size: 0,
      pen_color: "",
    };
  },
  components: {
    DrawCanvas,
  },
  mounted() {
    // console.log(this.$refs);
    this.pen_color = this.$refs.color.value;
    this.pen_size = +this.$refs.size.innerText;
  },
  watch: {
    pen_size: function (newVal, oldVal) {
      this.$refs.size.innerText = newVal;
    },
  },
  methods: {
    decrease_pen_size() {
      this.pen_size -= 2;
      if (this.pen_size < 5) {
        this.pen_size = 5;
      }
    },
    increase_pen_size() {
      this.pen_size += 2;
      if (this.pen_size > 25) {
        this.pen_size = 25;
      }
    },
    handle_change_color(e) {
      console.log(e);
      this.pen_color = e.target.value;
    },
    handle_clear() {
      //   console.log(this.$refs);
      this.$refs.DrawCanvas.handleClear();
    },
    handle_save() {
      this.$refs.DrawCanvas.handleSave();
    },
  },
};
</script>

<style scoped>
.toolbox {
  background-color: skyblue;
  display: flex;
  width: 800px;
  padding: 1rem;
}
.toolbox > * {
  background-color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
}
.toolbox > :last-child {
  margin-left: auto;
}
</style>
