// const path = require("path");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "./",
  devServer: {
    port: 9528,
    // setupMiddlewares: (middlewares, devServer) => {
    //   if (!devServer) {
    //     throw new Error("webpack-dev-server is not defined");
    //   }
    //   const mockMiddleware = require("./mock/mock-server.js");
    //   mockMiddleware(devServer.app);
    //   return middlewares;
    // },
  },
  configureWebpack: {
    resolve: {
      fallback: {
        path: false,
      },
      alias: {
        "@": resolve("src"),
      },
    },
  },
});
