const express = require('express')

const app = express()

// const cors = require('cors')

// 解析成json
app.use(express.json())
// 允许跨域
// app.use(cors())
app.use(require('cors')())

// 引入服务器的路由文件admin/index.js，并执行它导出的函数，同时传入app，供其使用
let router = require('./routes/admin/index')
router(app)
// 引入数据库同理
let db = require('./plugins/mongodb')
db(app)



app.listen(3001, () => {
  console.log('http://localhost:3001')
})