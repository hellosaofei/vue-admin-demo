<template>
  <div
    class="list"
    @dragstart="handleDragStart($event)"
    @dragend="handleDragEnd($event)"
    @dragenter="handleDragEnter($event)"
  >
    <div class="list-item" draggable="true">1</div>
    <div class="list-item" draggable="true">2</div>
    <div class="list-item" draggable="true">3</div>
    <div class="list-item" draggable="true">4</div>
  </div>
</template>

<script>
export default {
  name: "DragEle",
  data() {
    return {
      sourceNode: "", // 存储被拖拽的元素
      listNode: "", //存储父容器
    };
  },
  mounted() {
    this.listNode = document.querySelector(".list");
  },
  methods: {
    handleDragStart(e) {
      setTimeout(() => {
        e.target.classList.add("moving");
      }, 0);
      this.sourceNode = e.target;
    },
    handleDragEnd(e) {
      this.sourceNode.classList.remove("moving");
    },
    handleDragEnter(e) {
      e.preventDefault();
      if (e.target === this.listNode || e.target === this.sourceNode) {
        return;
      }
      const children = [...this.listNode.children];
      const sourceIndex = children.indexOf(this.sourceNode);
      const targetIndex = children.indexOf(e.target);
      if (sourceIndex < targetIndex) {
        this.listNode.insertBefore(
          this.sourceNode,
          e.target.nextElementSibling
        );
        // console.log('target节点在下方')
      } else {
        this.listNode.insertBefore(this.sourceNode, e.target);
        // console.log('target节点在上方')
      }
      // console.log(e.target);
    },
  },
};
</script>

<style>
/* .list {
  width: 200px;
  margin-top: 2em;
} */

.list-item {
  margin: 5px 0;
  padding: 0 20px;
  line-height: 40px;
  height: 40px;
  background: linear-gradient(to right, rgb(61, 132, 160), #87deed);
  color: #fff;
  cursor: move;
  user-select: none;
  border-radius: 5px;
  text-align: center;
}
.moving {
  background: transparent;
  color: transparent;
  /* opacity: 0.5; */
  border: 1px dashed #ccc;
}
</style>
