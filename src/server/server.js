const express = require('express')
const config = require('config')
const favicon = require('serve-favicon')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const app = express()

const PORT = config.get('port') || 5000

app.use(cors())

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/orders', require('./routes/orders.routes'))

if (process.env.NODE_ENV === 'production') {
  try {
    app.use('/', express.static(path.join(process.cwd(), 'build')))
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  } catch (e) {
    console.log('reqerror', e)
  }
}

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log('mongoose connected')
    app.listen(PORT, () => console.log(`app has been started on port ${PORT}`))
  } catch (e) {
    console.log('Server Error', e)
    process.exit(1)
  }
}

start()