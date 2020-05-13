const { Router } = require('express')
const Order = require('../models/Order')
const config = require('config')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/placeOrder', auth, async (req, res) => {
    try {
        const { order } = req.body
        console.log(order)

        const orders = new Order({
            dishes: order,
            user: req.user.userId
        })

        console.log('ord', orders)

        await orders.save()

        res.status(201).json({ message: 'Success' })

    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'Something went wrong'})
    }
})

router.get('/getOrders', auth, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.userId })
        res.json({orders: orders.dishes})
    } catch (e) {
        res.status(500).json({message: 'Something went wrong'})
    }
})

module.exports = router