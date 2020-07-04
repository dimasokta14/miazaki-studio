const express = require('express')
const router = express.Router()
const Task = require('../models/task-model')


// Get All data
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find()
    if(tasks == null){
        return res.status(404).json({message: "Task not found!"})
    }else{
        return res.status(200).json(tasks)
    }
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});
// get one data
router.get('/:id', getTask, (req, res) => {
  res.send(res.task.title)
})
// Post data
router.post('/', async (req,res) => {
  const task = new Task({
    title: req.body.title,
    documentation: req.body.documentation
  })
  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})
// update data
router.patch('/:id', getTask, async (req,res) => {
  if(req.body.title != null){
      res.task.title = req.body.title
  }

  if(req.body.documentation != null) {
      res.task.documentation = req.body.documentation
  }

  try {
      const updateTask = await res.task.save()
      res.json(updateTask)
  } catch (error) {
      res.status(400).json({message: error.message})
  }
})
// delete data
router.delete('/:id', getTask, async (req,res) => {
  try {
      await res.task.remove()
      res.json({message: "Deleted Task"})
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})

async function getTask(req, res, next){
    let task
    try {
        task = await Task.findById(req.params.id)
        if(task == null){
            return res.status(404).json({message: 'Task not found'})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }

    res.task = task
    next()
}

module.exports = router;