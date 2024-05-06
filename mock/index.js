// import Mock from "mockjs";
// import data from "./data.js";

// Mock.mock("/user/userinfo", "get", data);
const Mock = require("mockjs");
const { param2Obj } = require("./utils");
const icon = require("./config/icon");
const user = require("./config/user");
const table = require("./config/table");
const comment = require("./config/comment");
const systemLog = require("./config/systemLog");
const timeline = require("./config/timeline");
const mocks = [
  ...user,
  ...table,
  ...icon,
  ...comment,
  ...systemLog,
  ...timeline,
];

// const files = require.context('../../mock/controller', false, /\.js$/)

// files.keys().forEach((key) => {
//   mocks.push(...files(key))
// })

function mockXHR() {
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send;
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false;

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType;
      }
    }
    this.proxy_send(...arguments);
  };

  function XHR2ExpressReqWrap(respond) {
    return function (options) {
      let result = null;
      if (respond instanceof Function) {
        const { body, type, url } = options;
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url),
        });
      } else {
        result = respond;
      }
      return Mock.mock(result);
    };
  }

  mocks.forEach((item) => {
    Mock.mock(
      new RegExp(item.url),
      item.type || "get",
      XHR2ExpressReqWrap(item.response)
    );
  });
  //   for (const i of mocks) {
  //     Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
  //   }
}

module.exports = {
  mocks,
  mockXHR,
};
