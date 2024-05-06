// 验证是否是外链
// 可以匹配到的内容，返回true或false
// http://example.com
// https://secure.example.com
// mailto:someone@example.com
// tel:1234567890
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

// 验证用户名，在该数组中就返回true
export function validUsername(str) {
  const valid_map = ["admin", "editor"];
  const isInArray = valid_map.includes(str.trim());
  // return valid_map.indexOf(str.trim()) >= 0;
  return isInArray;
}
