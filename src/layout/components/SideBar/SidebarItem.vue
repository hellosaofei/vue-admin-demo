<template>
  <!-- 首先就是该路由的hidden=false，表示需要被渲染上页面，才会走下面的代码 -->
  <div v-if="!item.hidden">
    <!-- 不含children的路由，走下面的代码 -->
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren)
      "
    >
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': !isNest }"
        >
          <item
            :icon="onlyOneChild.meta.icon"
            :title="onlyOneChild.meta.title"
          />
        </el-menu-item>
      </app-link>
    </template>
    <!-- 含children的路由，走下面的代码 -->
    <el-submenu v-else ref="subMenu" :index="item.path" popper-append-to-body>
      <template slot="title">
        <item
          v-if="item.meta"
          :icon="item.meta && item.meta.icon"
          :title="item.meta.title"
        />
      </template>
      <!-- 递归开始 -->
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :isNest="true"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import Item from "./Item";
import AppLink from "@/components/AppLink";

export default {
  name: "SidebarItem",
  components: { AppLink, Item },
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: "",
    },
    isNest: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      onlyOneChild: null,
    };
  },

  methods: {
    /**
     * desc:传入的是路由对象，item通常为{path:'/',redirect:'/dashboard',component:'',children:Array[1]}
     *
     */
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });
      //如果item有一个子路由，就将该子路由赋值给onlyOneChild
      if (showingChildren.length === 1) {
        return true;
      }
      //如果item没有children属性，
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }

      return false;
    },
    resolvePath(routePath) {
      return this.basePath + "/" + routePath;
    },
  },
};
</script>
<style>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
