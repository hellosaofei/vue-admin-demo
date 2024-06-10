import request from "@/utils/request";

export function userLogin(data) {
  return request({
    url: "/login111",
    method: "post",
    data,
  });
}

export function getUserInfo(token) {
  return request({
    url: "/user/info",
    method: "get",
    params: { token },
  });
}

export function userLogout() {
  return request({
    url: "/user/logout",
    method: "post",
  });
}

export function getToken(refreshToken) {
  return request({
    url: "/refresh",
    methods: "get",
    headers: {
      RefreshToken: refreshToken,
    },
  });
}
