import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/comment/getList",
    method: "post",
    data,
  });
}
