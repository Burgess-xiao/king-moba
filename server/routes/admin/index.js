// 服务器的路由单独写在这个文件里

// export default 和module.exports的区别
// 导出一个函数，函数有一个app对象，通过index.js传入 
module.exports = app => {
  const express = require('express')

  // 定义一个子路由router
  const router = express.Router()

  // 引入定义好的模型category.js
  const Category = require('../../modules/category')
  // 通过子路由来做接口
  router.post('/categories', async (req, res) => {
    // 用Category模型创建数据，数据来源是客户端的req.body(post请求参数是通过body传递)
    // 这里的req.body应该是一个promise对象，所以加上await, index.js里面的express.json()
    const model = await Category.create(req.body)
    // 将这个model发送回客户端，可以知道model创建完成
    res.send(model)
  })
  // 然后将这个子路由router挂在到app上面
  app.use('admin/api', router)
}