import Layout from "@/layout";

export default {
  path: "/service-view",
  component: Layout,
  name: "service-view",
  meta: {
    title: "serviceView",
    icon: "example",
  },
  redirect: "/service-view/award",
  children: [
    {
      path: "award",
      component: () => import("@/views/service-view/award"),
      name: "award",
      meta: { title: "award", noCache: true },
    },
    {
      path: "charts",
      component: () => import("@/views/service-view/charts"),
      name: "charts",
      meta: { title: "charts", noCache: true },
    },
    {
      path: "pdf",
      component: () => import("@/views/service-view/Pdf"),
      name: "pdf",
      meta: { title: "pdf", noCache: true },
    },
    {
      path: "sliderVerify",
      component: () => import("@/views/service-view/sliderVerify"),
      name: "sliderVerify",
      meta: { title: "sliderVerify", noCache: true },
    },
    {
      path: "videoPlayer",
      component: () => import("@/views/service-view/videoPlayer"),
      name: "videoPlayer",
      meta: { title: "videoPlayer", noCache: true },
    },
    {
      path: "magnifier",
      component: () => import("@/views/service-view/magnifier"),
      name: "magnifier",
      meta: { title: "magnifier", noCache: true },
    },
  ],
};
