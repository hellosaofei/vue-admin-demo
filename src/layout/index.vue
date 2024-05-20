<template>
  <div :class="classObj" class="app-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <side-bar class="sidebar-container" />
    <div class="main-container">
      <div :class="{ 'fixed-header': isFixHeader }">
        <nav-bar />
        <TagsView v-if="tagsView" />
      </div>
      <app-main />
      <right-pane v-if="showSettings">
        <Setting />
      </right-pane>
    </div>
  </div>
</template>

<script>
import RightPane from "@/components/RightPane";
import { mapGetters } from "vuex";
import { NavBar, SideBar, AppMain, TagsView, Setting } from "./components";
import ResizeMixin from "./mixin/ResizeHander";
export default {
  name: "Layout",
  components: {
    NavBar,
    SideBar,
    AppMain,
    TagsView,
    RightPane,
    Setting,
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters([
      "sidebar",
      "device",
      "isFixHeader",
      "showSettings",
      "tagsView",
    ]),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile",
      };
    },
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
