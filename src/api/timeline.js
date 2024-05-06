import request from "@/utils/request";

export function getListV1(data) {
  return request({
    url: "/timeline/v1/getList",
    method: "get",
    data,
  });
}

export function getListV2(data) {
  return request({
    url: "/timeline/v2/getList",
    method: "get",
    data,
  });
}
