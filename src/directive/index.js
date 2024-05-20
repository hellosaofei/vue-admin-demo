import Vue from "vue";
import Clipboard from "./clipboard/index.js";
import WaterMark from "./watermark/index.js";

Vue.directive("Clipboard", Clipboard);
Vue.directive("Watermark", WaterMark);
