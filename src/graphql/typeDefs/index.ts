import { exportUtil } from '../../utils'

const typeDefs: string[] = []

// using exportUtil requires files in this folder to use export default
exportUtil(__dirname, file => typeDefs.push(require(`./${file}`).default))

export default typeDefs
