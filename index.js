const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const port = 5000



mongoose.set('strictQuery', false);

//Database connection with Mongoose
mongoose.connect('mongodb://localhost/product')
    .then(() => console.log('connection succesfull'))
    .catch(err => console.log(err.message))


const userRoute = require('./routes/user.router')
app.use('/user', userRoute)

const buyerRoute = require('./routes/buyer.router')
app.use('/buyer', buyerRoute)

const productRoute = require('./routes/product.router')
app.use('/product', productRoute)




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




