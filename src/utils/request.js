import axios from "axios";
import store from "@/store/index";
import { requestToken, addRequestConfig } from "./refresh";
// import

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_Url,
  timeout: 60000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (store.getters.accessToken) {
      config.headers["AccessToken"] = store.getters.accessToken;
    }
    // store.getters.accessToken &&
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//  响应拦截器
service.interceptors.response.use(
  (response) => {
    const { config, data, request } = response;
    return new Promise(async (resolve, reject) => {
      if (data.code === 5002) {
        // 短Token已经失效
        // console.log("已经检测到短token 过期");
        // 删除失效的短Token
        await store.dispatch("user/resetAccessToken");
        // 将过期的请求存储起来，当拿到新的短token时，再次发送请求，达到无感刷新
        // console.log("过期请求的配置为：", config);
        // console.log("过期请求为：", request);
        addRequestConfig(config);
        // 携带长Token去请求新的Token
        requestToken();
      } else if (data.code === 4001) {
        this.$message({
          message: `refreshToken失效，请重新登录`,
          type: "error",
        });
        await this.$store.dispatch("user/logout");
        this.$router.push(`/login`);
      } else {
        resolve(data);
      }
    });
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
