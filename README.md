# cdnWebpackBodyAfter
将独立的cdn项目追加到body后！
# 安装

```
yarn add cdnWebpackBodyAfter --dev && npm install cdnWebpackBodyAfter --save-dev
```
# 使用方法
```
const cdnWebpackBodyAfter = require('./cdn-webpack-body-after')

plugins: [
  new cdn(['https://xxx.com/', 'https://xxx.com/'])
]
```
