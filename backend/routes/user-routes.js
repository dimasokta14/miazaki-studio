const express = require('express')
const router = express.Router()
const User = require('../models/user-model')


// Get All data
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});
// get one data
router.get('/:id', getUser, (req, res) => {
  let userArr = {
      "id": res.user._id,
      "name": res.user.name,
      "email": res.user.email,
      "phone": res.user.phone,
      "address": res.user.address,
      "company": res.user.company
  }
  res.send(userArr)
});
// Post data
router.post('/', async (req,res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone:req.body.phone,
    company:req.body.company,
    address:req.body.address
  })
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})
// update data
router.patch('/:id', getUser, async (req,res) => {
  if(req.body.name != null){
      res.user.name = req.body.name
  }
  if(req.body.phone != null){
    res.user.phone = req.body.phone
  }
  if(req.body.email != null){
    res.user.email = req.body.email
  }
if(req.body.company != null){
    res.user.company = req.body.company
}
if(req.body.address != null){
    res.user.address = req.body.address
}

    try {
        const updateUser = await res.user.save()
        res.json(updateUser)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})
// delete data
router.delete('/:id', getUser, async (req,res) => {
  try {
      await res.user.remove()
      res.json({message: "Deleted user"})
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})

async function getUser(req, res, next){
    let user
    try {
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json({message: "User not found"})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }

    res.user = user
    next()
}

module.exports = router;