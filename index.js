function cdnWebpackBodyAfter(cdns) {
  this.cdns = cdns
}

cdnWebpackBodyAfter.prototype.apply = function (compiler) {
  var cdns = this.cdns
  compiler.plugin('compilation', function (compilation, options) {
    compilation.plugin('html-webpack-plugin-before-html-generation',
      function (htmlPluginData, callback) {
        var totalCDN = cdns.concat(htmlPluginData.assets.js)
        htmlPluginData.assets.js = totalCDN
        callback(null, htmlPluginData)
      }
    )
  })
}

module.exports = cdnWebpackBodyAfter