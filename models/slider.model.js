const mongoose = require('mongoose')
const sliderSchema = mongoose.Schema({
    title: String,
    subtitle: String
})

module.exports = sliderSchema;