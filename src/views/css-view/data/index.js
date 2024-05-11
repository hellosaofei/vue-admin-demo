import data1 from "./data1.json";
import data2 from "./data2.json";

const list1 = data1.data.items.map((i) => ({
  id: i.id,
  url: i.note_card.cover.url_pre,
  width: i.note_card.cover.width,
  height: i.note_card.cover.height,
}));
const list2 = data2.data.items.map((i) => ({
  id: i.id,
  url: i.note_card.cover.url_pre,
  width: i.note_card.cover.width,
  height: i.note_card.cover.height,
}));

const dataList = [...list1, ...list2];
export { dataList };
