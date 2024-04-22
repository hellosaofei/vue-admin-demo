import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 3000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//  响应拦截器
service.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
