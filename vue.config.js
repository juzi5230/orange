const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  // 修改 src 目录 为 examples 目录
  lintOnSave: true,
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
    config.resolve.alias
      .set('@', resolve('./packages'))
      .set('@style', resolve('./style'))
  }
}
