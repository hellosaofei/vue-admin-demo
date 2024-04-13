// import defaultSettings from '@/settings'

// const { showSettings, fixedHeader, sidebarLogo } = defaultSettings
import { project_title, fixedHeader, sidebarLogo } from "@/settings";
const state = {
  showSettings: true,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
};

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
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
