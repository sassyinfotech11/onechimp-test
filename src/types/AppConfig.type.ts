import { IConfig } from 'config'

export interface IAppConfig extends IConfig {
  onechimp: {
    host: string
    port: number
  }
  database: {
    host: string
    name: string
    username?: string
    password?: string
    port: number
  }
  jwt: {
    secret: string
  }
  redis: {
    host: string
    port: number
  }
  facebook: {
    clientID: string
    clientSecret: string
    callbackURL: string
  }
}
