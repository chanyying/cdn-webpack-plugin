# html-body-cdn-webpack-plugin
将独立的cdn项目追加到body后！
# 安装

```
yarn add html-body-cdn-webpack-plugin --dev && npm install html-body-cdn-webpack-plugin --save-dev
```
# 使用方法
```
const cdnWebpackBodyAfter = require('html-body-cdn-webpack-plugin')

plugins: [
  new cdn(['https://xxx.com/', 'https://xxx.com/'])
]
```
