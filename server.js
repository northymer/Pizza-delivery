const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const app = express()

const PORT = config.get('port') || 8080

app.use(cors())

app.use(express.json({extended: true}))

app.use('/api/auth', require('./src/server/routes/auth.routes'))
app.use('/api/orders', require('./src/server/routes/orders.routes'))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    app.listen(PORT, () => console.log(`app has been started on port ${PORT}`))
  } catch (e) {
    console.log('Server Error')
    process.exit(1)
  }
}

start()