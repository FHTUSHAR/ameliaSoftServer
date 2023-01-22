const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')

router.post('/', productController.addProduct)
router.get('/all', productController.allProduct)
router.get('/:id', productController.productId)

module.exports = router