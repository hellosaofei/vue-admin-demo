<template>
  <div :class="{ 'has-logo': isShowLogo }">
    <logo v-if="isShowLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="menuBgColor"
        :text-color="menuTextColor"
        :unique-opened="false"
        :active-text-color="menuActiveTextColor"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

export default {
  data() {
    return {
      menuTextColor: "#bfcbd9",
      menuActiveTextColor: "#409EFF",
      menuBgColor: "#304156",
    };
  },
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(["sidebar", "isShowLogo"]),
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      const { path } = this.$route;
      return path;
    },
    //是否折叠
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
};
</script>
