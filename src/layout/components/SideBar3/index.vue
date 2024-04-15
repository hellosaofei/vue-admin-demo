<template>
  <div :class="{ 'has-logo': isShowLogo }">
    <logo v-if="isShowLogo" :collapse="isCollapse" />

    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      background-color="#304156"
      :text-color="variables.menuText"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(["sidebar", "isShowLogo"]),
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      const { meta, path } = this.$route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
    //是否折叠
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
};
</script>
