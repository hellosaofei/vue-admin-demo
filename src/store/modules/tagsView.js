// const { splice } = require("mock/user");

const actions = {
  // 同时从visitedView和cacheView中添加view
  // 异步实现，返回删除后的数组
  addView({ dispatch }, view) {
    dispatch("addVisitedView", view);
    dispatch("addCachedView", view);
  },
  // 向visitedView中添加view
  addVisitedView({ commit }, view) {
    commit("ADD_VISITED_VIEW", view);
  },
  // 向cachedView中添加view
  addCachedView({ commit }, view) {
    commit("ADD_CACHED_VIEW", view);
  },
  // 同时从visitedView和cacheView中删除view
  // 异步实现，返回删除后的数组
  delView({ dispatch, state }, view) {
    return new Promise((resolve) => {
      dispatch("delVisitedView", view);
      dispatch("delCachedView", view);
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews],
      });
    });
  },
  // 从visitedView中删除一个view
  // 异步实现，返回删除后的数组
  delVisitedView({ commit, state }, view) {
    return new Promise((resolve) => {
      commit("DEL_VISITED_VIEW", view);
      resolve([...state.visitedViews]);
    });
  },
  // 从cachedView中删除一个view
  // 异步实现，返回删除后的数组
  delCachedView({ commit, state }, view) {
    return new Promise((resolve) => {
      commit("DEL_CACHED_VIEW", view);
      resolve([...state.cachedViews]);
    });
  },

  updateVisitedView({ commit }, view) {
    commit("UPDATE_VISITED_VIEW", view);
  },
};

const mutations = {
  ADD_VISITED_VIEW: (state, view) => {
    // 如果存在具有相同path的route，就直接返回
    if (state.visitedViews.some((v) => v.path === view.path)) return;
    // 否则就进行添加
    state.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta.title || "no-name",
      })
    );
  },
  ADD_CACHED_VIEW: (state, view) => {
    if (state.cachedViews.includes(view.name)) return;
    if (!view.meta.noCache) {
      state.cachedViews.push(view.name);
    }
  },
  // view是一个route对象
  DEL_VISITED_VIEW: (state, view) => {
    for (const [index, value] of state.visitedViews.entries()) {
      if (value.path === view.path) {
        // splice方法在原数组上操作，会改变原数组
        state.visitedViews.splice(index, 1);
        break;
      }
    }
  },
  DEL_CACHED_VIEW: (state, view) => {
    const index = state.cachedViews.indexOf(view.name);
    index > -1 && state.cachedViews.splice(index, 1);
  },

  // 改变
  UPDATE_VISITED_VIEW: (state, view) => {
    for (let v of state.visitedViews) {
      if (v.path === view.path) {
        v = Object.assign(v, view);
        break;
      }
    }
  },
  // UPDATE_VISITED_VIEW: (state, view) => {},
};

const state = {
  // 用户浏览过的数组
  visitedViews: [],
  // 实际上kepp-alive的路由，可以通过meta.Cache配置是否需要缓存
  cachedViews: [],
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
