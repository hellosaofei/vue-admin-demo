const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  token: (state) => state.user.token,
  accessToken: (state) => state.user.accessToken,
  refreshToken: (state) => state.user.refreshToken,
  avatar: (state) => state.user.avatar,
  name: (state) => state.user.name,
  isShowSidebarLogo: (state) => state.settings.isShowSidebarLogo,
  isFixHeader: (state) => state.settings.isFixHeader,
  theme: (state) => state.settings.theme,
  tagsView: (state) => state.settings.tagsView,
  showSettings: (state) => state.settings.showSettings,
};
export default getters;
