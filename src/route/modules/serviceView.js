import Layout from "@/layout";

export default {
  path: "/service-view",
  component: Layout,
  name: "service-view",
  meta: {
    title: "业务相关",
    icon: "el-icon-set-up",
  },
  redirect: "/service-view/award",
  children: [
    {
      path: "award",
      component: () => import("@/views/service-view/award"),
      name: "award",
      meta: { title: "抽奖", noCache: true },
    },
    {
      path: "charts",
      component: () => import("@/views/service-view/charts"),
      name: "charts",
      meta: { title: "chart图表", noCache: true },
    },
    {
      path: "pdf",
      component: () => import("@/views/service-view/Pdf"),
      name: "pdf",
      meta: { title: "pdf预览", noCache: true },
    },
    {
      path: "sliderVerify1",
      component: () => import("@/views/service-view/sliderVerify1"),
      name: "sliderVerify1",
      meta: { title: "滑动验证码", noCache: true },
    },
    {
      path: "videoPlayer",
      component: () => import("@/views/service-view/videoPlayer"),
      name: "videoPlayer",
      meta: { title: "视频播放器", noCache: true },
    },
    {
      path: "magnifier",
      component: () => import("@/views/service-view/magnifier"),
      name: "magnifier",
      meta: { title: "放大镜效果", noCache: true },
    },
    {
      path: "num-increase",
      component: () => import("@/views/service-view/numIncrease"),
      name: "num-increase",
      meta: { title: "数字自增长", noCache: true },
    },
    {
      path: "share",
      component: () => import("@/views/service-view/share"),
      name: "share",
      meta: { title: "分享", noCache: true },
    },
    {
      path: "watermark",
      component: () => import("@/views/service-view/waterMark"),
      name: "WaterMark",
      meta: { title: "水印效果", noCache: true },
    },
  ],
};
