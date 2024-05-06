<template>
  <el-pagination
    :current-page="queryForm.pageNo"
    :page-size="queryForm.pageSize"
    :layout="paginationSetting.layout"
    :background="paginationSetting.background"
    :total="paginationSetting.total"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  />
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {};
  },
  props: {
    queryForm: {
      type: Object,
      default: () => {
        return {
          pageNo: 1,
          pageSize: 20,
        };
      },
    },
    paginationSetting: {
      type: Object,
      default: () => {
        return {
          total: 0,
          background: true,
          layout: "total, sizes, prev, pager, next, jumper",
        };
      },
    },
  },
  methods: {},
};
</script>

<style></style>
