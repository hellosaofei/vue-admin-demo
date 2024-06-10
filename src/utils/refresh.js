import { getToken } from "@/api/user";
import store from "@/store/index";
import request from "@/utils/request";

import eventBus from "@/plugins/eventBus";

// 用于存放过期的请求
let requestConfigList = [];

// 设置开关，保证每次只能请求一次
let flag = false;

// 将过期的请求存放在数组中
export const addRequestConfig = (requestConfig) => {
  requestConfigList.push(requestConfig);
};

// 调用过期的请求
export const retryRequest = () => {
  requestConfigList.forEach((config) => {
    request(config);
  });
  requestConfigList = [];
};

// 短token 失效，携带refreshToken去请求新的token
export const requestToken = () => {
  // 如果没有人请求
  if (!flag) {
    flag = true;
    let refreshToken = store.getters.refreshToken;
    if (refreshToken) {
      getToken(refreshToken).then(async (res) => {
        if (res.code == 4001) {
          // 长token 过期，重新登录
          flag = false;
          await store.dispatch("user/resetRefreshToken");
        } else if (res.code == 2000) {
          await store.dispatch("user/setAccessToken", res.data.accessToken);
          await store.dispatch("user/setRefreshToken", res.data.refreshToken);
          // 发布一个事件，告诉其他组件accessToken已经更新成功，可以重新进行请求了
          eventBus.$emit("tokenRefreshed");
          flag = false;
          console.log("成功刷新双token，正在重新请求数据");
          //   retryRequest();
        }
      });
    }
  }
};
