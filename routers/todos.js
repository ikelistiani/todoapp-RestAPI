const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')


// router.get('/',(req, res)=> {
//   res.send('Hello Word')
// })


router.get('/:id',(req, res)=> {
  
})
// Getting all
router.get('/', async (req, res) => {
    try {
      const todos = await Todo.find()
      res.json(todos)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })


  // // Coba
  // router.get('/:id', Todo, (req, res) => {
  //   res.json(res.todo)
  // })
  
  // Creating one
  router.post('/', async (req, res) => {
    const todo = new Todo({
      title: req.body.title,
      task: req.body.task
    })
    try {
      const newTask = await todo.save()
      res.status(201).json(newTask)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })
  
  // Updating One
  router.patch('/:id', getTodo, async (req, res) => {
    if (req.body.title != null) {
      res.todo.name = req.body.title
    }
    if (req.body.Task != null) {
      res.todo.Task = req.body.Task
    }
    try {
      const updatedTodo = await res.todo.save()
      res.json(updatedTodo)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })
  
  // Deleting One
  router.delete('/:id', getTodo, async (req, res) => {
    try {
      await res.todo.remove()
      res.json({ message: 'Deleted Task' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })
  
  async function getTodo(req, res, next) {
    let todo
    try {
      todo = await Todo.findById(req.params.id)
      if (todo == null) {
        return res.status(404).json({ message: 'Cannot find todo' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.todo = todo
    next()
  }
  
  module.exports = router
