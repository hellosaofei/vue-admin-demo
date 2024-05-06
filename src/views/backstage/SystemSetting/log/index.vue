<template>
  <div>
    <el-table
      :data="tableItemList"
      style="width: 100%"
      :height="height"
      @selection-change="setSelectRows"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="日志类型">
              <span>{{ props.row.log_type }}</span>
            </el-form-item>
            <el-form-item label="账号">
              <span>{{ props.row.log_role }}</span>
            </el-form-item>
            <el-form-item label="执行结果">
              <span>{{ props.row.log_result }}</span>
            </el-form-item>
            <el-form-item label="登录IP">
              <span>{{ props.row.log_ip }}</span>
            </el-form-item>
            <el-form-item label="操作时间">
              <span>{{ props.row.date }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="日志类型" prop="log_type"></el-table-column>
      <el-table-column label="账号" prop="log_role"></el-table-column>
      <el-table-column label="执行结果" prop="log_result"></el-table-column>
      <el-table-column label="登录IP" prop="log_ip"></el-table-column>
      <el-table-column label="操作时间" prop="date"></el-table-column>
    </el-table>
    <div class="pagination-area">
      <el-pagination
        :current-page="queryForm.pageNo"
        :page-size="queryForm.pageSize"
        :layout="paginationSetting.layout"
        :background="paginationSetting.background"
        :total="paginationSetting.total"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </div>
  </div>
</template>

<script>
import { getList } from "@/api/systemLog";
export default {
  name: "LogCom",
  data() {
    return {
      height: "400px",
      selectRows: "",
      tableItemList: [],
      paginationSetting: {
        background: true,
        layout: "total, sizes, prev, pager, next, jumper",
        total: 0,
      },
      queryForm: {
        pageNo: 1,
        pageSize: 20,
        title: "",
      },
    };
  },
  methods: {
    setSelectRows(val) {
      this.selectRows = val;
    },
    handleCurrentChange(val) {
      this.queryForm.pageNo = val;
      this.fetchData();
    },
    handleSizeChange(val) {
      this.queryForm.pageSize = val;
      this.fetchData();
    },
    async fetchData() {
      const { data, totalCount } = await getList(this.queryForm);
      this.tableItemList = data;
      this.paginationSetting.total = totalCount;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
  padding-left: 5rem;
}
</style>
