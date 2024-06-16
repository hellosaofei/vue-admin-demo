import request from "@/utils/request";

export function uploadFile(data) {
  return request({
    url: "/fileUpload/upload",
    method: "post",
    data,
  });
}

export function mergeFile(data) {
  return request({
    url: "/fileUpload/merge",
    method: "post",
    data,
  });
}
