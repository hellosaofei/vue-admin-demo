<template>
  <!-- 该组件的逻辑是： 判断父组件传过来的地址是否是外链 。是的话返回标签a及其相关属性，不是则返回router-link标签-->
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
import { isExternal } from "@/utils/validate";

export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  computed: {
    //判断父组件传过来的地址是否是外链
    isExternal_to() {
      return isExternal(this.to);
    },
    //判断是否是外链，是的话就返回a标签，否则返回router-link标签
    type() {
      if (this.isExternal_to) {
        return "a";
      }
      return "router-link";
    },
  },
  methods: {
    linkProps(to) {
      //判断是否是外链，是的话就返回a标签的相关属性，否则直接返回{to:to}
      if (this.isExternal_to) {
        return {
          href: to,
          target: "_blank",
          rel: "noopener",
        };
      }
      return {
        to: to,
      };
    },
  },
};
</script>
