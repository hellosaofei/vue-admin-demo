const path = require("path");
// const defaultSettings = require("./src/settings.js");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

function resolve(dir) {
  return path.join(__dirname, dir);
}

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 9528,
  },
  configureWebpack: {
    // plugins: [new BundleAnalyzerPlugin()],
    externals: {
      Vue: "vue",
      "vue-router": "VueRouter",
      "video.js": "videojs", //这里的'videojs'是全局变量名，确保它在你的HTML文件中可用
      // "element-ui": "element",
    },
  },
  chainWebpack(config) {
    // 当有很多页面时，这可能会导致很多无意义的请求
    config.plugins.delete("prefetch");
    //
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();

    // config
    //   .plugin("ScriptExtHtmlWebpackPlugin")
    //   .after("html")
    //   .use("script-ext-html-webpack-plugin", [
    //     {
    //       // `runtime` must same as runtimeChunk name. default is `runtime`
    //       inline: /runtime\..*\.js$/,
    //     },
    //   ])
    //   .end();
    config.optimization.splitChunks({
      chunks: "all",
      cacheGroups: {
        libs: {
          name: "chunk-libs",
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: "initial", // only package third parties that are initially dependent
        },
        elementUI: {
          name: "chunk-elementUI", // split elementUI into a single package
          priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
        },
        commons: {
          name: "chunk-commons",
          test: resolve("src/components"), // can customize your rules
          minChunks: 3, //  minimum common number
          priority: 5,
          reuseExistingChunk: true,
        },
      },
    });
    // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
    config.optimization.runtimeChunk("single");
  },
});
