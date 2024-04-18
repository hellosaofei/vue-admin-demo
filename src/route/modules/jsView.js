import Layout from "@/layout";

export default {
  path: "/js-view",
  component: Layout,
  name: "jsView",
  meta: {
    title: "jsView",
    icon: "chart",
  },
  redirect: "/js-view/canvas",
  children: [
    {
      path: "canvas",
      component: () => import("@/views/js-view/canvas"),
      name: "canvas",
      meta: { title: "canvas", noCache: true },
    },
    {
      path: "countTo",
      component: () => import("@/views/js-view/countTo"),
      name: "countTo",
      meta: { title: "countTo", noCache: true },
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
      meta: { title: "upload", noCache: true },
    },
    {
      path: "drag",
      component: () => import("@/views/js-view/drag"),
      name: "drag",
      meta: { title: "drag", noCache: true },
    },
  ],
};
