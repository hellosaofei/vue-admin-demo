<template>
  <div class="app-container">
    <el-table
      :border="true"
      ref="tableSort"
      :data="tableItemList"
      :height="height"
      @selection-change="setSelectRows"
      @sort-change="tableSortChange"
    >
      <el-table-column show-overflow-tooltip type="selection" width="55" />
      <el-table-column label="序号" show-overflow-tooltip width="95">
        <template #default="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="标题" prop="title" show-overflow-tooltip />
      <el-table-column label="作者" prop="author" show-overflow-tooltip />
      <el-table-column label="头像" show-overflow-tooltip>
        <template #default="{ row }">
          <el-popover placement="top" width="200" trigger="hover">
            <el-image :src="row.img" style="width: 78px; height: 50px" />

            <el-image
              v-if="imgShow"
              style="width: 50px"
              :preview-src-list="imageList"
              :src="row.img"
              slot="reference"
            />
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="点击量"
        prop="pageViews"
        show-overflow-tooltip
        sortable
      />
      <el-table-column label="状态" show-overflow-tooltip>
        <template #default="{ row }">
          <el-tooltip
            class="item"
            :content="row.status"
            effect="dark"
            placement="top-start"
          >
            <el-tag :type="row.status | statusFilter">
              {{ row.status }}
            </el-tag>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column
        label="时间"
        prop="datetime"
        show-overflow-tooltip
        width="200"
      />
      <el-table-column label="操作" show-overflow-tooltip width="180px">
        <template #default="{ row }">
          <el-button type="text" @click="handleEdit(row)">编辑</el-button>
          <el-button type="text" @click="handleDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
</template>

<script>
import { getList } from "@/api/table";
export default {
  name: "TableCom",
  data() {
    return {
      imgShow: true,
      imageList: [],
      tableItemList: [],
      height: "400px",
      selectRows: "",
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
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    tableSortChange() {
      const imageList = [];
      this.$refs.tableSort.tableData.forEach((item, index) => {
        imageList.push(item.img);
      });
      this.imageList = imageList;
    },
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
    handleEdit(row) {
      console.log(row);
    },
    handleDelete(row) {
      console.log("删除" + row);
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
