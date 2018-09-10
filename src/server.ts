import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import express from 'express'
import { createServer } from 'http'
import path from 'path'
import schema from './graphql'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'
import morgan from 'morgan'
import models from './models'

const app = express()
const server = createServer(app)
const dev = process.env.NODE_ENV !== 'production'

app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan(dev ? 'dev' : 'common'))

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index'))

app.use(
  '/api/gql',
  graphqlExpress(req => ({
    schema,
    context: { req, models }
  }))
)

// only enable graphiql in dev environment
if (dev) {  
  app.get(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/api/gql',
      subscriptionsEndpoint: 'ws://localhost:8080/gss'
    })
  )
}

app.get('*', (req, res) => res.sendStatus(404))

export default server
