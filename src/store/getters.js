const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  token: (state) => state.user.token,
  avatar: (state) => state.user.avatar,
  name: (state) => state.user.name,
  isShowLogo: (state) => state.settings.isShowSidebarLogo,
  isFixHeader: (state) => state.settings.isFixHeader,
};
export default getters;
