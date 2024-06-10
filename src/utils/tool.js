// 用户触发操作过于频繁，只需要最后一次事件的操作
// 防抖函数
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
// 节流函数
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

// 用于修改全局主题色
export function setPrimaryColor(primaryColor) {
  const primaryColorRgb = hexToRgb(primaryColor);

  document.documentElement.style.setProperty(
    "--v2-color-primary",
    primaryColor
  );
  document.documentElement.style.setProperty(
    "--v2-color-primary-rgb",
    primaryColorRgb
  );

  for (let i = 1; i <= 9; i++) {
    const opacity = i / 10;
    document.documentElement.style.setProperty(
      `--v2-color-primary-opacity-${i}`,
      `rgba(${primaryColorRgb}, ${opacity})`
    );
  }
}
// 从数组中随机取一个元素
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
// 将hex颜色值('#fffff')转换为rgb颜色值(256,256,256)
function hexToRgb(hex) {
  let bigint = parseInt(hex.slice(1), 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;
  return `${r},${g},${b}`;
}
