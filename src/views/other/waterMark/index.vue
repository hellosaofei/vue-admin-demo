<template>
  <div class="app-container">
    <ContentCard v-bind="{ cardName: '全局水印', cardWidth: '100%' }">
      <el-button type="success">添加全局水印</el-button>
      <el-button type="warning">移除全局水印</el-button>
    </ContentCard>
    <ContentCard v-bind="{ cardName: '局部自定义水印配置', cardWidth: '100%' }">
      <div class="config">
        <div class="left-part">
          <div class="watermark-container">
            <div v-watermark="waterMarkConfig"></div>
          </div>
        </div>
        <div class="right-part">
          <div class="config-item">
            <span>水印内容</span>
            <el-input v-model="waterMarkConfig.text"></el-input>
          </div>
          <div class="config-item">
            <span>旋转角度</span>
            <el-slider
              v-model="waterMarkConfig.rotate"
              :min="-50"
              :max="50"
            ></el-slider>
          </div>
          <div class="config-item">
            <span>间距</span>
            <div class="gap-config">
              <el-input-number
                v-model="waterMarkConfig.gap_vertical"
                controls-position="right"
                :min="140"
                :max="200"
              ></el-input-number>
              <el-input-number
                v-model="waterMarkConfig.gap_horizontal"
                controls-position="right"
                :min="100"
                :max="180"
              ></el-input-number>
            </div>
          </div>
        </div>
      </div>
    </ContentCard>
  </div>
</template>

<script>
import ContentCard from "@/components/ContentCard";
export default {
  name: "WaterMarkCom",
  components: {
    ContentCard,
  },
  data() {
    return {
      waterMarkConfig: {
        text: "后台管理模板",
        rotate: -20,
        gap_vertical: 150,
        gap_horizontal: 150,
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.top-part {
  background-color: #ddd;
}
.config {
  display: flex;
  justify-content: space-between;
  .left-part {
    flex: 1;
    border-right: 1px solid #ccc;
    .watermark-container {
      height: 100%;
      & div:nth-child(2) {
        height: 100%;
      }
    }
  }
  .right-part {
    flex: 1;
    padding-left: 20px;
  }
}
.config-item {
  margin-bottom: 10px;
  span {
    margin-bottom: 10px;
  }
}
.gap-config {
  display: flex;
  justify-content: space-between;
}
.el-input {
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
