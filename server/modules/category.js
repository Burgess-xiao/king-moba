const mongoose = require('mongoose')

// schema相当于一个模型，里面可以定义专属字段
const schema = new mongoose.Schema({
  name: {type: String}
})

module.exports = mongoose.model('category', schema)