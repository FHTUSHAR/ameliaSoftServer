const mongoose = require('mongoose')
const userSchema = require("../models/user.model");
const User = new mongoose.model('CakeShopUser', userSchema)

const user = {
    registerUser: async (req, res) => {

        try {
            const user = new User(req.body);
            await user.save()
            res.status(201).send(user)
            if (!user) {
                return res.json({ "code": 'User not created' })
            }
            else {
                return res.json('user added successfully')
            }
        } catch (error) {
            res.status(200).json({
                message: error.message
            })
        }
    }

}
module.exports = user


