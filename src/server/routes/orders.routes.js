const { Router } = require('express')
const Order = require('../models/Order')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')
const auth = require('../middleware/auth.middleware')
const router = Router()

const textErrors = {
  empty: 'Field must not be empty'
}

router.post('/placeOrder',
  [
    check('form.email').not().isEmpty().withMessage(textErrors.empty),
    check('form.phone').not().isEmpty().withMessage(textErrors.empty),
    check('form.name').not().isEmpty().withMessage(textErrors.empty),
  ],
  async (req, res) => {
    try {
      const { form } = req.body

      console.log('form', form)

      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
      }

      const token = req.headers.authorization && req.headers.authorization.split(' ')[1]
      let decoded

      if (!token) {
        return res.status(201).json({ message: 'Success' })
      } else {
        decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded
      }

      const orders = new Order({
        form: form,
        user: req.user.userId
      })

      console.log('ord', orders)

      await orders.save()

      res.status(201).json({ message: 'Success' })

    } catch (e) {
      console.log(e)
      res.status(500).json({ message: 'Something went wrong' })
    }
  })

router.get('/getOrders', auth, async (req, res) => {
  try {
    console.log('headers', req.headers)
    console.log('userId', req.user.userId)
    const orders = await Order.find({ user: req.user.userId })
    console.log(orders)
    res.json({ orders })
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = router