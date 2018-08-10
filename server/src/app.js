const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const { sequelize } = require('./models/mysql/index')
const config = require('./config/config')


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync({ force: false }).then(() => {
  app.listen(config.port)
  console.log(`Server started on port ${config.port}`)
})

mongoose.connect(
  "mongoconnection",{
    ssl: true,
    authSource: 'admin',
    retryWrites: true
  }
);