const express = require('express')
const router = express.Router()
const Portofolio = require('../models/portofolio-model')

router.get('/', async (req, res) => {
    try {
        const portos = await Portofolio.find()
        if(portos == null){
            return res.status(404).json({message: "Portofolio not found"})
        }else{
            return res.status(200).json(portos)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router