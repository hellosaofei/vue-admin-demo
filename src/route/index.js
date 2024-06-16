import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Layout from "@/layout";

import jsViewRouter from "./modules/jsView";
import cssViewRouter from "./modules/cssView";
import serviceViewRouter from "./modules/serviceView";
import backstageRouter from "./modules/backstage";
import otherViewRouter from "./modules/otherView";

//获取原型对象上的push函数
// const originalPush = VueRouter.prototype.push;
// //修改原型对象中的push方法
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch((err) => err);
// };
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "Dashboard", icon: "el-icon-eleme" },
      },
    ],
  },

  {
    path: "/Updatelog",
    component: Layout,
    redirect: "/Updatelog/index",
    children: [
      {
        path: "index",
        name: "Updatelog",
        component: () => import("@/views/update-log/index"),
        meta: { title: "更新日志", icon: "el-icon-s-help" },
      },
    ],
  },

  jsViewRouter,
  cssViewRouter,
  serviceViewRouter,
  backstageRouter,
  otherViewRouter,
  {
    path: "/example",
    component: Layout,
    redirect: "/example/table",
    name: "Example",
    meta: { title: "Example", icon: "el-icon-s-help" },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/table/index"),
        meta: { title: "Table", icon: "el-icon-menu" },
      },
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/tree/index"),
        meta: { title: "Tree", icon: "el-icon-s-data" },
      },
    ],
  },

  // 404页面
  // { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
