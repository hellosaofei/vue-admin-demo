import router from "./route";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "./utils/auth";
import { getPageTitle } from "@/utils/get-page-title";

// 存储一些不需要登录就能查看的界面
// 就是说不需要路由守卫进行鉴权
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  document.title = getPageTitle(to.meta.title);
  //获取token信息，
  // 如果有，说明用户已经完成登录并获得了token
  // 此处的token是从cookie中获取的
  // const hasToken = getToken();
  // 有token
  if (store.getters.refreshToken) {
    //如果要访问的网址是登录页面，因为已经登录，所以直接跳转到首页
    if (to.path === "/login") {
      next({ path: "/" });
      NProgress.done();
    } else {
      // 如果要访问的网址是其他页面，由于这些页面需要使用到用户的比如name、avatar等信息，
      // 所以需要事先得到这些信息并存储在state中
      // 如果有，直接放行即可
      if (store.getters.name) {
        next();
      }
      // 如果没有，就尝试向后端请求
      else {
        try {
          await store.dispatch("user/getInfo");
          next();
        } catch (err) {
          await store.dispatch("user/resetToken");
          Message.error(err || "向后端请求用户信息时出现错误，请重新登录");
          // 为什么要带query参数，因为此时被重置到了login界面，
          // 但是要访问的界面不是login界面，所以放一个query参数
          // 方便登录之后能直接跳转到要访问的界面
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    // token都没有，说明都没有登录
    // 说明要访问的页面不在列表内，需要进行登录才能访问
    if (whiteList.indexOf(to.path) === -1) {
      console.log("未检测到refreshToken，请重新登录");
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    } else {
      next();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
