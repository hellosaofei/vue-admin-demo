import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/order/getList",
    method: "post",
    data,
  });
}
