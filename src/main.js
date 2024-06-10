import Vue from "vue";

import "@/directive/index";
import "@/plugins/index";

import "normalize.css/normalize.css";

import "video.js/dist/video-js.css";
import "@/styles/index.scss";

import App from "./App.vue";
import store from "./store";
import router from "./route";
import "@/icons";
import "@/permission";

Vue.prototype.$echarts = window.echarts;
Vue.prototype.$eventBus = new Vue();

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
