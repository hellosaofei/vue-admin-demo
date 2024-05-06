<template>
  <div class="app-container">
    <el-table
      :border="true"
      ref="tableSort"
      :data="tableItemList"
      :height="height"
      @sort-change="tableSortChange"
    >
      <el-table-column show-overflow-tooltip type="selection" width="55" />
      <el-table-column
        label="序号"
        show-overflow-tooltip
        width="95"
        align="center"
      >
        <template #default="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="商品图" align="center" show-overflow-tooltip>
        <template #default="{ row }">
          <el-popover placement="top" trigger="hover">
            <img
              :src="row.order_image"
              alt=""
              style="width: 150px; height: 100px"
            />
            <el-image
              style="width: 50px"
              :preview-src-list="imageList"
              :src="row.order_image"
              slot="reference"
            />
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="交易时间"
        prop="order_date"
        sortable
        show-overflow-tooltip
      />
      <el-table-column
        label="商品订单号"
        prop="order_number"
        show-overflow-tooltip
      />
      <el-table-column
        label="支付宝工单号"
        prop="order_alipay"
        show-overflow-tooltip
      />
      <el-table-column
        label="交易场景"
        prop="order_scene"
        align="center"
        sortable
        show-overflow-tooltip
      />
      <el-table-column
        label="交易状态"
        align="center"
        sortable
        show-overflow-tooltip
      >
        <template #default="{ row }">
          <el-tag :type="row.order_status | statusFilter">
            {{ row.order_status | statusTextFilter }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="订单金额（元）"
        prop="order_money"
        align="center"
        show-overflow-tooltip
      />
      <el-table-column label="操作" show-overflow-tooltip>
        <template #default="{ row }">
          <el-button type="text" @click="handleReFund(row)">退款</el-button>
        </template>
      </el-table-column>
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
import { getList } from "@/api/order";
export default {
  name: "TableCom",
  data() {
    return {
      imageList: [],
      tableItemList: [],
      height: "400px",
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
  filters: {
    statusFilter(status) {
      const statusList = ["success", "danger", "info"];
      return statusList[status];
    },
    statusTextFilter(status) {
      const statusList = ["支付成功", "未支付", "退款中"];
      return statusList[status];
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    //表格相关事件的回调函数
    tableSortChange() {
      const imageList = [];
      this.$refs.tableSort.tableData.forEach((item, index) => {
        imageList.push(item.img);
      });
      this.imageList = imageList;
    },
    handleReFund(row) {
      console.log(row);
    },
    //分页发生变化
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
      const imageList = [];
      data.forEach((item) => {
        imageList.push(item.img);
      });
      this.imageList = imageList;
      this.paginationSetting.total = totalCount;
    },
  },
};
</script>

<style></style>
