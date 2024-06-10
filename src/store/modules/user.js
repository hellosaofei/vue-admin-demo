import { userLogin, userLogout, getUserInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { resetRouter } from "@/route";

const getDefaultState = () => {
  return {
    // 方法行不通
    // 表示accessToken是否有效//
    // accessToken失效时，返回的code 为5002，
    // 响应拦截器检测到code为5002时，将该变量设置为false，表示accessToken已经失效
    // 组件内该次数据请求肯定是拿不到数据的，因此就需要组件监听该变量的变化，重新渲染
    // accessToken值设置为true的时机为：requestConfigList列表为空后，表示所有未拿到数据的请求都重新进行了请求
    // isATValid:true,
    accessToken: "",
    refreshToken: "",
    token: "",
    name: "张安",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80",
  };
};

const state = getDefaultState();

const mutations = {
  //使用原始空的state信息覆盖当前用户的state
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  RESET_ACCESS_TOKEN: (state) => {
    state.accessToken = "";
  },
  RESET_REFRESH_TOKEN: (state) => {
    state.accessToken = "";
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_ACCESS_TOKEN: (state, token) => {
    state.accessToken = token;
  },
  SET_REFRESH_TOKEN: (state, token) => {
    state.refreshToken = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
};

const actions = {
  // 用户登录
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      userLogin({ username: username.trim(), password: password })
        .then((response) => {
          const { data } = response;
          commit("SET_ACCESS_TOKEN", data.accessToken);
          commit("SET_REFRESH_TOKEN", data.refreshToken);
          // commit("SET_TOKEN", data.token); // 存储在state中
          // setToken(data.token); //存储在cookie中
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      //获取用户信息时，是拿state中存储的token作为默认参数去向后端请求的
      getUserInfo(state.token)
        .then((response) => {
          const { code, data } = response; // 捕获后端返回的信息
          if (code !== 20000) {
            return reject("后端未返回正确数据");
          }
          if (!data) {
            return reject("验证失败请重新登陆");
          }

          const { name, avatar } = data;

          commit("SET_NAME", name); //存储用户信息
          commit("SET_AVATAR", avatar);
          resolve(data); //将用户信息交出去
        })
        .catch((error) => {
          reject(error); //抛出错误信息
        });
    });
  },

  // 退出登录
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      userLogout(state.token)
        .then(() => {
          // removeToken(); // 移除cookie中存储的token
          resetRouter();
          commit("RESET_STATE"); // 重置当前用户的state为空
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      // removeToken(); // 移除cookie中存储的token
      commit("RESET_STATE"); // 重置当前用户的state为空
      resolve();
    });
  },
  // 删除accessToken
  resetAccessToken({ commit }) {
    return new Promise((resolve) => {
      commit("RESET_ACCESS_TOKEN");
      resolve();
    });
  },
  // 删除refreshToken
  resetRefreshToken({ commit }) {
    return new Promise((resolve) => {
      commit("RESET_REFRESH_TOKEN");
      resolve();
    });
  },
  // 设置accessToken
  setAccessToken({ commit }, accessToken) {
    return new Promise((resolve) => {
      commit("SET_ACCESS_TOKEN", accessToken);
      resolve();
    });
  },
  // 设置refreshToken
  setRefreshToken({ commit }, refreshToken) {
    return new Promise((resolve) => {
      commit("SET_REFRESH_TOKEN", refreshToken);
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
