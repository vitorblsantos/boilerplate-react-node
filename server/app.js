import { json } from 'body-parser'
import { join } from 'path'

import compression from 'compression'
import cors from 'cors'
import express from 'express'

import routes from './routes'

const Server = express()

Server.disable('x-powered-by')
Server.use(cors())
Server.use(compression())
Server.use(json())
Server.use(express.static(join(__dirname, 'view')))
Server.use(routes)

export default Server
