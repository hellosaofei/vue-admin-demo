import ClipboardJS from "clipboard";
export default {
  bind(el, binding) {
    // 使用该指令时，至少需要同时传入两个参数：sucess或者的error的回调函数、要被复制的参数及其行为
    if (binding.arg === "success") {
      el._v_clipboard_success = binding.value;
    } else if (binding.arg == "error") {
      el._v_clipboard_error = binding.value;
    } else {
      // v-clipboard:copy="inputData" copy表示复制行为：剪切或复制 inputData表示复制要复制的数据
      const clipboard = new ClipboardJS(el, {
        text: function () {
          return binding.value;
        },
        action: function () {
          return binding.arg === "cut" ? "cut" : "copy";
        },
      });
      clipboard.on("success", (e) => {
        const callback = el._v_clipboard_success;
        callback && callback(e);
      });
      clipboard.on("error", (e) => {
        const callback = el._v_clipboard_error;
        callback && callback(e);
      });
      el._v_clipboard = clipboard;
    }
  },
  update(el, binding) {
    if (binding.arg === "success") {
      el._v_clipboard_success = binding.value;
    } else if (binding.arg == "error") {
      el._v_clipboard_error = binding.value;
    } else {
      el._v_clipboard.text = function () {
        return binding.value;
      };
      el._v_clipboard.action = function () {
        return binding.arg === "cut" ? "cut" : "copy";
      };
    }
  },
  unbind(el, binding) {
    if (binding.arg === "success") {
      delete el._v_clipboard_success;
    } else if (binding.arg == "error") {
      delete el._v_clipboard_error;
    } else {
      // destroy()
      el._v_clipboard.destroy();
      delete el._v_clipboard;
    }
  },
};
