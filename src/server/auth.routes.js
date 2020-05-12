const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const User = require('./models/User')
const router = Router()

router.post(
    '/register',
    [
        check('name', 'Name should not be empty').exists(),
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Minimal length of password is 6 symbols').isLength({ min: 6 })
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect Data'
            })
        }

        const { name, email, password } = req.body

        const candidate = await User.findOne({ email })
        if (candidate) {
            return res.status(400).json({ message: 'User with this email already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = new User({
            name,
            email,
            password: hashedPassword
        })

        await user.save()

        res.setHeader('Access-Control-Allow-Origin', '*')

        res.status(201).json({ message: 'User is created' })

    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'Something went wrong'})
    }
})

router.post(
    '/login',
    [
        check('email', 'Incorrect email').normalizeEmail().isEmail(),
        check('password', 'Incorrect password').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect Login Data'
                })
            }

            const { email, password } = req.body

            const user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({ message: 'No such user' })
            }

            const matching = await bcrypt.compare(password, user.password)
            if (!matching) {
                return res.status(400).json({ message: 'Incorrect password' })
            }

            const token = jwt.sign(
            { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            res.json({ token, userId: user.id })


        } catch (e) {
            res.status(500).json({message: 'Something went wrong'})
        }
})

module.exports = router