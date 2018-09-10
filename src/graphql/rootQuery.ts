const rootQuery = `
  type Query {
    getCheckList(id: ID, isActive: Boolean = true): CheckList
  }
`

export default rootQuery
