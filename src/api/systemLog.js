import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/systemlog/getList",
    method: "post",
    data,
  });
}
// "/systemlog/getList"
