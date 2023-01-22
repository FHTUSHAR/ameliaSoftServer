const mongoose = require('mongoose')
const buyerSchema = mongoose.Schema({
    name: String,
    address: String,
    phone: String
})

module.exports = buyerSchema;