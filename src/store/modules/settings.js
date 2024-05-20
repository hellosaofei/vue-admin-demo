// import defaultSettings from '@/settings'

// const { showSettings, fixedHeader, sidebarLogo } = defaultSettings
import {
  project_title,
  isFixHeader,
  isShowSidebarLogo,
  showSettings,
  tagsView,
} from "@/settings";
const state = {
  theme: "#1890ff",
  tagsView: tagsView,
  showSettings: showSettings,
  isFixHeader: isFixHeader,
  isShowSidebarLogo: isShowSidebarLogo,
};

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  },
};

const actions = {
  changeSetting({ commit }, data) {
    commit("CHANGE_SETTING", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
