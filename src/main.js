import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./route";

import "@/permission";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
