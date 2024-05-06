<template>
  <div class="block">
    <el-timeline :reverse="true">
      <el-timeline-item
        v-for="(item, index) in timeLineList"
        :key="item.id"
        :timestamp="item.dateTime"
        placement="top"
      >
        <el-card class="timeline-card">
          <h4>{{ item.UpdateSummary }}</h4>
          <div class="tag-list">
            <el-tag
              v-for="(tag, index) in item.tagList"
              :key="index"
              :type="tag.type | statusFilter"
              style="margin-right: 20px"
            >
              {{ tag.content }}
            </el-tag>
          </div>
          <p>{{ item.UpdateContent }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "TimeLine",
  data() {
    return {
      timeLineList: [],
      total: null,
    };
  },
  filters: {
    statusFilter(status) {
      const statusList = ["danger", "info", "success", "warning"];
      return statusList[status];
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.resolveData();
    });
  },
  props: {
    timelineData: {
      type: Object,
      require: true,
    },
  },
  methods: {
    resolveData() {
      const { data, totalCount } = this.timelineData;
      this.timeLineList = data;
      this.total = totalCount;
    },
  },
};
</script>

<style>
.timeline-card {
  display: block !important;
}
</style>
