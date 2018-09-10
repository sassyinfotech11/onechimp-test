import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolvers'
import rootMutation from './rootMutation'
import rootQuery from './rootQuery'
import typeDefs from './typeDefs'

export default makeExecutableSchema({
  typeDefs: [...typeDefs, rootMutation, rootQuery],
  resolvers
})
