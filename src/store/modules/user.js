import { userLogin, userLogout, getUserInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { resetRouter } from "@/route";

const getDefaultState = () => {
  return {
    token: getToken(),
    name: "",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80",
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState()); //使用原始空的state信息覆盖当前用户的state
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
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
          commit("SET_TOKEN", data.token); // 存储在state中
          setToken(data.token); //存储在cookie中
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
          removeToken(); // 移除cookie中存储的token
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
      removeToken(); // 移除cookie中存储的token
      commit("RESET_STATE"); // 重置当前用户的state为空
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
