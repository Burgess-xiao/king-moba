module.exports = app => {
  const mongoose = require('mongoose')
  // 这里的useNewUrlParse放在地址后面，拿出来单独写会报错：用法已被摒弃
  // 端口后面就是数据库名字
  mongoose.connect('mongodb://localhost:27017/node-king-moba', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('数据库连接成功'))
    .catch((err) => console.log(err, '数据库连接失败'))
}