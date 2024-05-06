import Layout from "@/layout";

export default {
  path: "/backstage",
  component: Layout,
  name: "back-stage",
  meta: {
    title: "后台管理专项",
    icon: "el-icon-s-help",
  },
  redirect: "/backstage/manage",
  children: [
    {
      path: "manage",
      component: () => import("@/views/backstage/manage"),
      name: "manage",
      meta: { title: "管理", noCache: true },
      redirect: "/backstage/manage/comment",
      children: [
        {
          path: "panel",
          component: () => import("@/views/backstage/manage/panel"),
          name: "Panel",
          meta: { title: "管理面板" },
        },
        {
          path: "comment",
          component: () => import("@/views/backstage/manage/comment"),
          name: "Comment",
          meta: { title: "评论管理" },
        },
        {
          path: "goods",
          component: () => import("@/views/backstage/manage/goods"),
          name: "Goods",
          meta: { title: "商品管理" },
        },
        {
          path: "order",
          component: () => import("@/views/backstage/manage/order"),
          name: "Order",
          meta: { title: "订单管理" },
        },
        // {
        //   path: "staff",
        //   component: () => import("@/views/backstage/manage/staff"),
        //   name: "Staff",
        //   meta: { title: "人员管理" },
        // },
        {
          path: "source",
          component: () => import("@/views/backstage/manage/source"),
          name: "Source",
          meta: { title: "资源管理" },
        },
      ],
    },
    {
      path: "service",
      component: () => import("@/views/backstage/service"),
      name: "service",
      meta: { title: "业务", noCache: true },
      children: [
        {
          path: "icons",
          component: () => import("@/views/backstage/service/icons"),
          name: "icons",
          meta: { title: "图标" },
        },
      ],
    },
    {
      path: "setting",
      component: () => import("@/views/backstage/SystemSetting"),
      name: "setting",
      meta: { title: "设置", noCache: true },
      children: [
        {
          path: "log",
          component: () => import("@/views/backstage/SystemSetting/log"),
          name: "Comment",
          meta: { title: "系统日志" },
        },
      ],
    },
  ],
};
