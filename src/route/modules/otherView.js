import Layout from "@/layout";

export default {
  path: "/other",
  component: Layout,
  name: "other",
  meta: {
    title: "其他",
    icon: "el-icon-star-on",
  },
  redirect: "/other/signature",
  children: [
    {
      path: "signature",
      component: () => import("@/views/other/signature"),
      name: "signature",
      meta: { title: "签名", noCache: true },
    },
    {
      path: "waterMark",
      component: () => import("@/views/other/waterMark"),
      name: "watermark",
      meta: { title: "水印", noCache: true },
    },
    {
      path: "reValidate",
      component: () => import("@/views/other/reValidate"),
      name: "reValidate",
      meta: { title: "正则匹配", noCache: true },
    },
  ],
};
