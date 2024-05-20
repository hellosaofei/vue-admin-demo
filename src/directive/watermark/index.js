// 创建一个canvas元素，将用户想要添加的水印（目前只支持文本）转换为图片
// 然后通过canvas.toDataUrl()输出为base64的图片
function getDataUrl({
  font = "22px normal",
  fillStyle = "rgba(180, 180, 180, 0.3)",
  textAlign = "left",
  textBaseline = "middle",
  text = "请勿外传",
  rotate = -20,
  gap_vertical = 150,
  gap_horizontal = 150,
}) {
  const canvas = document.createElement("canvas");
  canvas.height = gap_vertical;
  canvas.width = gap_horizontal;
  const ctx = canvas.getContext("2d"); // 获取画布上下文

  ctx.rotate((rotate * Math.PI) / 180);
  ctx.font = font;
  ctx.fillStyle = fillStyle;
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.fillText(text, 5, 60);

  return canvas.toDataURL("image/png");
}
/**
 * 该函数用于创建watermark元素
 */
function createWaterMarkDOM(waterMarkConfig) {
  // 创建DOM元素div
  const waterMark = document.createElement("div");
  waterMark.className = `water-mark`;
  // 获取base64的水印图片
  const url = getDataUrl(waterMarkConfig);
  waterMark.setAttribute("style", `height:100%;background-image: url(${url});`);
  return waterMark;
}

export default {
  // 整体思路就是为一个DOM元素A添加v-watermark指令后，为其生成一个同级div元素
  // 该元素的背景图片是水印内容
  inserted(el, binding) {
    const { parentElement } = el;
    const waterMark = createWaterMarkDOM(binding.value);
    // const waterMark = createWaterMarkDOM(binding.value);

    parentElement.setAttribute("style", "position: relative;");

    parentElement.appendChild(waterMark);
  },
  update(el, binding) {
    const { parentElement } = el;
    const waterMark = createWaterMarkDOM(binding.value);
    // 删除原有水印
    parentElement.querySelector(".water-mark").remove();

    parentElement.setAttribute("style", "position: relative;");

    parentElement.appendChild(waterMark);
  },
};
