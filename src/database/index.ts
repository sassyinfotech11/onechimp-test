import config from 'config'
import mongoose from 'mongoose'
import { IAppConfig } from '../types'

const { host, name, username, password, port } = (config as IAppConfig).database
const dev = process.env.NODE_ENV !== 'production'
const uri = dev
  ? `mongodb://${host}:${port}/${name}`
  : `mongodb://${username}:${password}@${host}:${port}/${name}`

mongoose.connect(uri)
mongoose.connection.once('open', () => {
  process.stdout.write(
    `Database ${host}:${port}/${name} is ready to accept connections\n`
  )
})
mongoose.Promise = Promise

export default mongoose
