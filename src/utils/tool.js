// 用户触发操作过于频繁，只需要最后一次事件的操作
export function debounce(fn, delay = 500) {
  let t = null;
  return function () {
    if (t != null) {
      clearTimeout(t);
      //   alert("事件触发过于频繁，请稍候再试");
    }
    t = setTimeout(() => {
      fn.call(this);
    }, delay);
  };
}

// 控制比较耗费性能的代码的执行次数

export function throttle(fn, delay = 500) {
  let flag = true;
  return function () {
    if (flag) {
      setTimeout(() => {
        fn.call(this);
        flag = true;
        // alert("节流函数，一秒仅能触发一次");
      }, delay);
    }
    flag = false;
  };
}
