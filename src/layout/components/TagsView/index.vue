<template>
  <div class="tags-view-container">
    <el-scrollbar class="tags-view-wrapper">
      <router-link
        v-for="tag in visitedViews"
        ref="tag"
        :key="tag.path"
        :class="isActive(tag) ? 'active' : ''"
        :to="{
          path: tag.path,
          query: tag.query,
          fullPath: tag.fullPath,
        }"
        tag="span"
        class="tags-view-item"
        v-on:click.middle.native="isAffix(tag) ? '' : closeSelectedTag(tag)"
      >
        {{ tag.title }}
        <i
          v-if="!isAffix(tag)"
          class="el-icon-close"
          v-on:click.stop.prevent="closeSelectedTag(tag)"
        ></i>
      </router-link>
    </el-scrollbar>
  </div>
</template>

<script>
// import Scroll from "./Scroll.vue";
// import path from "path";
export default {
  name: "",
  components: {
    // Scroll,
  },
  data() {
    return {
      visible: false,
      top: 0,
      affixTags: [],
      left: 0,
    };
  },
  computed: {
    // 用户已经访问的页面
    visitedViews() {
      return this.$store.state.tagsView.visitedViews;
    },
    routes() {
      return [
        {
          path: "/",
          // component: Layout,
          redirect: "/dashboard",
          children: [
            {
              path: "dashboard",
              // component: () => import("@/views/dashboard/index"),
              name: "Dashboard",
              meta: { title: "首页", icon: "dashboard", affix: true },
            },
          ],
        },
        {
          path: "/login",
          // component: () => import("@/views/login/index"),
          hidden: true,
        },
      ];
    },
  },
  watch: {
    // 监听路由变化，增加路由并改变现有路由
    $route() {
      this.addTags();
      // this.moveToCurrentTag();
    },
  },
  mounted() {
    this.initTags();
    this.addTags();
  },
  methods: {
    // 用于实现路由拼接功能，相当于一个简易版的path.reslove()
    _resolve(str1, str2) {
      if (str1 == str2[0]) {
        return str2;
      } else return str1 + str2;
    },
    // 判断当前路由是否active
    isActive(route) {
      return this.$route.path === route.path;
    },
    // 判断当前tag是否是固定的
    isAffix(tag) {
      return tag.meta && tag.meta.affix;
    },
    // 过滤具有meta.affix==true的路由
    filterAffixTags(routes, basePath = "/") {
      let tags = [];
      routes.forEach((route) => {
        if (route.meta && route.meta.affix) {
          const tagPath = this._resolve(basePath, route.path);
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta },
          });
        }
        // 递归操作
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path);
          if (tempTags && tempTags.length >= 1) {
            tags = [...tags, ...tempTags];
          }
        }
      });
      return tags;
    },
    // 初始化
    initTags() {
      const affixTags = this.filterAffixTags(this.routes);
      for (const tag of affixTags) {
        // tag对应的路由必须有name
        if (tag.name) {
          this.$store.dispatch("tagsView/addVisitedView", tag);
        }
      }
    },
    // 添加tags
    addTags() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch("tagsView/addView", this.$route);
      }
      return false;
    },
    // 关闭选中的标签
    closeSelectedTag(view) {
      // 无论关闭的标签是否正在访问，都需要改变store中的数组
      this.$store
        .dispatch("tagsView/delView", view)
        .then(({ visitedViews }) => {
          // 如果关闭的标签是正在访问的
          if (this.isActive(view)) {
            // 调用函数跳转到下一个router
            this.toLastView(visitedViews, view);
          }
        });
    },
    // 每次关闭一个标签，都会跳转到下一个路由，
    // 该函数的目的就是遍历visitedView数组，看其中还有没有元素
    toLastView(visitedViews, view) {
      // 取visitedView数组的最后一个元素
      const latestView = visitedViews.slice(-1)[0];
      // 如果存在最后一个元素，就进行router跳转
      if (latestView) {
        this.$router.push(latestView.fullPath);
      } else {
        if (view.name === "Dashboard") {
          // to reload home page
          this.$router.replace({ path: "/redirect" + view.fullPath });
        } else {
          this.$router.push("/");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  .tags-view-wrapper {
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    width: 100%;
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
          content: "";
          background: #fff;
          display: inline-block;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.tags-view-item {
  .el-icon-close {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform-origin: 100% 50%;
    &:before {
      transform: scale(0.6);
      display: inline-block;
      vertical-align: -3px;
    }
    &:hover {
      background-color: #b4bccc;
      color: #fff;
    }
  }
}
</style>
