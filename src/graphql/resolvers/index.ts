import { merge } from 'lodash'
import { exportUtil } from '../../utils'


// This defines the structure of resolver
// merge will resursively merge other resolvers into rootResolver
const rootResolver = {
  Query: {},
  Mutation: {}
}

// using exportUtil requires files in this folder to use export default
exportUtil(__dirname, file => merge(rootResolver, require(`./${file}`).default))

export default rootResolver
