const express = require('express')
const router = express.Router()
const buyerController = require('../controllers/buyers.controller')

router.post('/', buyerController.registerBuyer)
router.get('/all', buyerController.allBuyer)

module.exports = router