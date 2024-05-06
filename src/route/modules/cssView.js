import Layout from "@/layout";

export default {
  path: "/css-view",
  component: Layout,
  name: "css-view",
  meta: {
    title: "Css相关",
    icon: "el-icon-star-on",
  },
  redirect: "/css-view/carousel",
  children: [
    {
      path: "carousel",
      component: () => import("@/views/css-view/carousel"),
      name: "carousel",
      meta: { title: "轮播图", noCache: true },
    },
    {
      path: "waterfall",
      component: () => import("@/views/css-view/waterFall"),
      name: "waterfall",
      meta: { title: "瀑布流图片", noCache: true },
    },
  ],
};
