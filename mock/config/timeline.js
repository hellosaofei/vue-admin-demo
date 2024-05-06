// const { mock } = require("mockjs");
const timelineList = [
  {
    id: 2024043001,
    dateTime: "2024/04/30",
    UpdateSummary: "首次上线该项目",
    UpdateContent: "无",
  },
  {
    id: 2024043002,
    dateTime: "2024/04/30",
    UpdateSummary: "项目故障调整",
    UpdateContent: "排查并解决以下问题：eharts模块无法正常显示、mock数据404",
  },
  {
    id: 2024043003,
    dateTime: "2024/04/30",
    UpdateSummary: "更新左侧导航栏无法正常显示的问题",
    UpdateContent:
      "暂时弃用原项目封装的svg组件，图标全部改用elementUI组件库中的icon",
  },
  {
    id: 2024050201,
    dateTime: "2024/05/01",
    UpdateSummary: "布局微调",
    UpdateContent:
      "解决panination不居中的问题，尝试二次封装el-panination组件未能成功",
  },
];
const count = timelineList.length;

module.exports = [
  {
    url: "/timeline/getList",
    type: "get",
    response(config) {
      return {
        code: 200,
        msg: "success",
        totalCount: count,
        data: timelineList,
      };
    },
  },
];
