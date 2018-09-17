module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    // 在 webpack.config.client.js 中的 ExtractPlugin 插件，只能
    // 将单独的样式，打包的时候单独打包出来，vue里面的样式，不会单独打包出来
    // 配了这个以后，也可以将vue中的样式单独打包出来
    // 开发环境不要启用这个配置，会报错
    extractCSS: !isDev,
    cssModules: {}
    // hotReload: false, // 根据环境变量生成
  }
}