<template>
  <div v-if="!item.hidden">
    <!-- 父组件传入的item值通常是{path:'/',redirect:'/dashboard',component:'',children:Array[1]} -->
    <!-- 
    如果 item 的子元素中只有一个是显示状态，并且
    (onlyOneChild 没有子元素或者 onlyOneChild 的子元素都不是显示状态)，并且
    item 不是总显示状态 
    上面三个同时满足时，说明没有嵌套的子路由，直接显示返回一个router-link链接即可
    -->

    <!-- 作者似乎是无论item下是否有childen或者children只有一个item都渲染成了一个sidebar-item -->
    <template
      v-if="
        //不包含子路由（情况二）或者仅仅包含一个子路由（情况一）
        //而且
        //!onlyOneChild.children:情况二
        //onlyOneChild.noShowingChildren：表示这是情况一
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren)
      "
    >
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <item
            :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
            :title="onlyOneChild.meta.title"
          />
        </el-menu-item>
      </app-link>
    </template>
    <!-- 
      如果有嵌套的子路由，需要返回一个el-submenu并通过递归生成其下面的el-submenu-item
    -->
    <el-submenu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
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
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
// import path from "path";
import { isExternal } from "@/utils/validate";
import Item from "./Item";
import AppLink from "@/components/AppLink";

export default {
  name: "SidebarItem",
  components: { Item, AppLink },
  props: {
    // route object
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  data() {
    //唯一的孩子

    return {
      onlyOneChild: null,
    };
  },
  methods: {
    //当传入item时，item通常为{path:'/',redirect:'/dashboard',component:'',children:Array[1]}
    hasOneShowingChild(children = [], parent) {
      //路由信息下的hidden属性
      //该结果返回一个数组，用于过滤this.$route.options.routes数组中的item，如果该item的hidden属性为true，就加入该数组
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });
      //对于传入的item={path:"/",component:'',...}
      // 情况一：如果没有children:[]子路由，showingChildren=[]，长度为0。
      //        处理onlyOneChild={ ...parent, path: "", noShowingChildren: true }，直接返回true
      //        此时onlyOneChild中包含的 函数传入的父节点item：hasOneShowingChild(children = [], parent)
      // 如果有children:[{},{}]子路由
      // 情况二：   子路由个数=1，必然都会显示，即item.hidden:false,最终showingChildren=[{}],长度为1，
      //            处理onlyOneChild=[{}]，判断showingChildren的长度最终返回true
      //            此时onlyOneChild中包含的 父节点item下唯一的子节点children:[{}]
      // 情况三：   子路由个数>1，必然都会显示，最终showingChildren=[{},{}]，长度为n，但是处理onlyOneChild=[{}]（仅仅包含最后一个子路由）,判断showingChildren的长度最终返回false
      //]
      //数组长度length
      // <=0，onlyOneChild={ ...parent, path: "", noShowingChildren: true }，返回true
      // =1，onlyOneChild={path:'/',redirect:'/dashboard',component:'',children:Array[1]}，返回true
      // >1，onlyOneChild={},返回false

      //如果数组长度为1，此时onlyOneChild就是一个item，说明只有一个route的hidden为true
      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true;
      }
      //如果数组长度为0，此时onlyOneChild为null
      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
      //如果数组长度大于1，此时onlyOneChild等于最后一个item，直接返回false了，说明不止有一个item的hidden属性时true
      return false;
    },
    //判断是否是外链，如果routePath和basePath都不是外链就返回两者之和
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return this.basePath + routePath;
    },
  },
};
</script>
