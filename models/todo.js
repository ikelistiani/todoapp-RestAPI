const mongoose = require('mongoose')

const todoSchema =  mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  task: {
    type: String,
    required: true
  },
  duedate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Todo', todoSchema)