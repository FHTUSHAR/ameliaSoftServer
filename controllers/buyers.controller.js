const mongoose = require('mongoose')
const buyerSchema = require('../models/buyer.model')
const Buyer = new mongoose.model('CakeShopBuyer', buyerSchema)

const buyer = {
    registerBuyer: async (req, res) => {
        try {
            const buyer = new Buyer(req.body);
            await buyer.save()
            res.status(201).send(buyer)
            if (!buyer) {
                return res.json({ "code": 'User not created' })
            }
            else {
                return res.json('user added successfully')
            }
        } catch {
            res.status(200).json({
                message: error.message
            })
        }
    },
    allBuyer: async (req, res) => {
        try {
            const data = await Buyer.find({})
            res.send(data)
        } catch (error) {
            res.status(200).json({
                message: error.message
            })
        }
    }
}
module.exports = buyer