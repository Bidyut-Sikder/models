const express = require('express')
const ProductModel = require('../Models/ProductModel')



const router = express.Router()








router.post('/', async (req, res) => {
    try {
        const result = await ProductModel.create(req.body)
        return res.status(200).json({ result })

    } catch (error) {
        return res.json(error.toString())
    }

})






















module.exports = router;






















































