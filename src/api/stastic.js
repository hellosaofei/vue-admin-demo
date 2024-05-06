import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/stastic/getList",
    method: "get",
    data,
  });
}
