<template>
  <div class="app-container">
    <el-tabs type="border-card" class="tab-container">
      <el-tab-pane label="Client">
        <TimeLine v-if="res1" :timelineData="res1" />
      </el-tab-pane>
      <el-tab-pane label="Server">
        <TimeLine v-if="res2" :timelineData="res2" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TimeLine from "./components/TimeLine.vue";
import { mapGetters } from "vuex";
import { getListV1, getListV2 } from "@/api/timeline";

export default {
  name: "UpdataLog",
  computed: {
    ...mapGetters(["name"]),
  },
  components: {
    TimeLine,
  },
  data() {
    return {
      res1: null,
      res2: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const [res1, res2] = await Promise.all([getListV1(), getListV2()]);
        // console.log(res1, res2);
        this.res1 = res1;
        this.res2 = res2;
      } catch (error) {
        this.$message({
          message: `请求数据出现错误${error}`,
          type: "error",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-container {
  border-radius: 5px;
}
</style>
