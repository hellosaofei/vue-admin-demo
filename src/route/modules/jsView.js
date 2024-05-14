import Layout from "@/layout";

export default {
  path: "/js-view",
  component: Layout,
  name: "jsView",
  meta: {
    title: "Js相关",
    icon: "el-icon-location",
  },
  redirect: "/js-view/canvas",
  children: [
    {
      path: "canvas",
      component: () => import("@/views/js-view/canvas"),
      name: "canvas",
      meta: { title: "canvas画板", noCache: true },
    },
    {
      path: "countTo",
      component: () => import("@/views/js-view/countTo"),
      name: "countTo",
      meta: { title: "数字自增长", noCache: true },
    },
    {
      path: "socket",
      component: () => import("@/views/js-view/socket"),
      name: "Socket",
      meta: { title: "Socket", noCache: true },
    },
    {
      path: "upload",
      component: () => import("@/views/js-view/upload"),
      name: "Upload",
      meta: { title: "文件上传", noCache: true },
    },
    {
      path: "drag",
      component: () => import("@/views/js-view/drag"),
      name: "drag",
      meta: { title: "元素拖拽", noCache: true },
    },
    {
      path: "toolFunction",
      component: () => import("@/views/js-view/toolFunction"),
      name: "toolFunction",
      meta: { title: "防抖节流", noCache: true },
    },
    {
      path: "VirtualList",
      component: () => import("@/views/js-view/VirtualList"),
      name: "VirtualList",
      meta: { title: "虚拟列表", noCache: true },
    },
    {
      path: "copy",
      component: () => import("@/views/js-view/copy"),
      name: "Copy",
      meta: { title: "复制粘贴", noCache: true },
    },
  ],
};
