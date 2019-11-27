import express from 'express'
import morgan from 'morgan'
import path from 'path'
import bodyParser from 'body-parser'
import config from 'server/config'
import api from 'server/routers'
import react from 'server/middlewares/react'
import { connect as connectDatabase } from 'server/services/database'

const app = express()

app.disable('x-powered-by')
app.set('trust proxy', 1)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.resolve(__dirname, '../../public')))

app.use(api)

app.use(morgan('dev'))

app.use(react)

app.listen(config.get('server.port'), () => {
  /* eslint-disable no-console */
  connectDatabase()
  console.log(
    `🧨 Server is running at http://localhost:${config.get('server.port')}`,
  )
})
