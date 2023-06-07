const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule('url-loader')
      .test(/\.(cur)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .end()
  },
})
