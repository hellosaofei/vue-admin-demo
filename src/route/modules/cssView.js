import Layout from "@/layout";

export default {
  path: "/css-view",
  component: Layout,
  name: "css-view",
  meta: {
    title: "cssView",
    icon: "eye",
  },
  redirect: "/css-view/carousel",
  children: [
    {
      path: "carousel",
      component: () => import("@/views/css-view/carousel"),
      name: "carousel",
      meta: { title: "carousel", noCache: true },
    },
    {
      path: "waterfall",
      component: () => import("@/views/css-view/waterFall"),
      name: "waterfall",
      meta: { title: "waterfall", noCache: true },
    },
  ],
};
