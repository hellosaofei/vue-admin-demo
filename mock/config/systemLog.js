const { mock } = require("mockjs");
const List = [];
const count = 50;
for (let i = 0; i < count; i++) {
  List.push(
    mock({
      log_id: "@id()",
      "log_type|1": ["数据库日志", "系统日志"],
      "log_role|1": ["admin", "editor", "test"],
      "log_result|1": ["操作成功", "操作失败", "登陆成功"],
      log_ip: "@ip()",
      date: "@datetime()",
    })
  );
}

module.exports = [
  {
    url: "/systemlog/getList",
    type: "post",
    response(config) {
      if (!config.body) {
        return {
          code: 200,
          msg: "success",
          totalCount: count,
          data: List,
        };
      }
      const { title = "", pageNo = 1, pageSize = 20 } = config.body;
      //筛选title，用于搜索框进行title搜索
      let mockList = List.filter((item) => {
        return !(title && item.title.indexOf(title) < 0);
      });
      //筛选index，用于更新页码
      const pageList = mockList.filter(
        (item, index) =>
          index < pageSize * pageNo && index >= pageSize * (pageNo - 1)
      );
      return {
        code: 200,
        msg: "success",
        totalCount: count,
        data: pageList,
      };
    },
  },
];
