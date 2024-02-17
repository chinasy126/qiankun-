const appName = require("./package.json").name;

module.exports = {
  devServer: {
    port: 4200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: {
    library: `${appName}-[name]`,
    libraryTarget: "umd",
    chunkLoadingGlobal: `webpackJsonp_${appName}`,
  },
};
