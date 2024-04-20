import Vue from "vue";
import "normalize.css/normalize.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "video.js/dist/video-js.css";
//video.js/dist/video-js.css
import "@/styles/index.scss";

import App from "./App.vue";
import store from "./store";
import router from "./route";
import "@/icons";
import "@/permission";

import VueLuckyCanvas from "@lucky-canvas/vue";
Vue.use(VueLuckyCanvas);
Vue.prototype.$echarts = window.echarts;
// Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
