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
      <el-table-column label="序号" show-overflow-tooltip>
        <template #default="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column
        label="商品ID"
        prop="good_id"
        show-overflow-tooltip
        width="200"
      />
      <el-table-column
        label="商品名称"
        prop="good_name"
        show-overflow-tooltip
        width="150"
      />
      <el-table-column label="商品图" show-overflow-tooltip>
        <template #default="{ row }">
          <el-popover placement="top" width="50px" trigger="hover">
            <el-image :src="row.good_image" style="width: 50px" />

            <el-image
              v-if="imgShow"
              style="width: 50px"
              :preview-src-list="imageList"
              :src="row.good_image"
              slot="reference"
            />
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="评级" show-overflow-tooltip width="180">
        <template #default="{ row }">
          <el-rate
            v-model="row.rate"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}分"
          ></el-rate>
        </template>
      </el-table-column>

      <el-table-column
        label="评论内容"
        prop="comment_content"
        show-overflow-tooltip
        width="200"
      />
      <el-table-column
        label="回复内容"
        prop="reply_content"
        show-overflow-tooltip
        width="200"
      />
      <el-table-column label="评论状态" show-overflow-tooltip>
        <template #default="{ row }">
          <el-tooltip
            class="item"
            :content="row.status | statusContent"
            effect="dark"
            placement="top-start"
          >
            <el-tag :type="row.status | statusFilter">
              {{ row.status | statusContent }}
            </el-tag>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column
        label="评论时间"
        prop="date"
        show-overflow-tooltip
        width="180"
      />
      <!-- 占位，操作 -->
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
import { getList } from "@/api/comment";
export default {
  name: "CommentCom",
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
      const statusList = ["", "success", "danger"];
      return statusList[status];
    },
    statusContent(status) {
      const textList = ["", "已回复", "未回复"];
      return textList[status];
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
