const express = require('express')
const config = require('config')
const favicon = require('serve-favicon')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const app = express()

const PORT = config.get('port') || 8080

app.use(cors())

app.use(express.json({extended: true}))

if (process.env.NODE_ENV === 'production') {
  console.log('cwd', process.cwd())
  console.log('dirname', __dirname)
  // app.get('*', (req, res) => {
  //   console.log(req)
  //   res.sendFile(path.resolve(process.cwd(), 'build', 'index.html'))
  // })
  app.use('/', express.static(path.join(process.cwd(), 'build')))

  app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.resolve(process.cwd(), 'public', 'favicon.ico'))
  })
  app.use(favicon(path.join(process.cwd(), 'public', 'favicon.ico')))
}

async function start() {
  try {
    console.log('started')
    app.use('/api/auth', require('./src/server/routes/auth.routes'))
    app.use('/api/orders', require('./src/server/routes/orders.routes'))
    console.log('use part')
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