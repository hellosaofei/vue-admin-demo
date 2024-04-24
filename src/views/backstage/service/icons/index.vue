<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane label="ElementUI icons">
        <el-col :span="24">
          <el-form :inline="true" label-width="80px" @submit.native.prevent>
            <el-form-item label="图标名称">
              <el-input v-model="queryForm.title" />
            </el-form-item>
            <el-form-item label-width="0">
              <el-button native-type="submit" type="primary" @click="queryData">
                搜索
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col
          v-for="(item, index) in queryIcon"
          :key="index"
          :lg="2"
          :md="3"
          :sm="8"
          :xl="2"
          :xs="6"
          style="padding-left: 10px; padding-right: 10px"
        >
          <el-card
            shadow="hover"
            style="cursor: pointer"
            @click.native="handleCopyIcon(index, $event)"
          >
            <i :class="'el-icon-' + item" />
          </el-card>
          <div class="icon-text">
            {{ item }}
          </div>
        </el-col>
        <el-col :span="24">
          <el-pagination
            :background="paginationSetting.background"
            :current-page="queryForm.pageNo"
            :layout="paginationSetting.layout"
            :page-size="queryForm.pageSize"
            :page-sizes="[72, 144]"
            :total="paginationSetting.total"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          />
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="others">其他图标</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getIconList } from "@/api/icon";
export default {
  name: "Icon",
  data() {
    return {
      copyText: "",
      selectRows: "",
      queryIcon: [],
      paginationSetting: {
        background: true,
        layout: "total, sizes, prev, pager, next, jumper",
        total: 0,
      },
      queryForm: {
        pageNo: 1,
        pageSize: 72,
        title: "",
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    //更换每页图标数量
    handleSizeChange(val) {
      this.queryForm.pageSize = val;
      this.fetchData();
    },
    //更换当前页面
    handleCurrentChange(val) {
      this.queryForm.pageNo = val;
      this.fetchData();
    },
    handleCopyIcon(a, b) {
      console.log(a, b);
    },
    // 输入框-搜索图标
    queryData() {
      this.queryForm.pageNo = 1;
      this.fetchData();
    },
    async fetchData() {
      const { data, totalCount } = await getIconList(this.queryForm);
      this.queryIcon = data;
      this.paginationSetting.total = totalCount;
    },
  },
};
</script>

<style>
.el-card {
  margin-bottom: 20px;
}
.el-card__body {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
}
.icon-text {
  height: 30px;
  margin-top: -15px;
  overflow: hidden;
  font-size: 12px;
  line-height: 30px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
