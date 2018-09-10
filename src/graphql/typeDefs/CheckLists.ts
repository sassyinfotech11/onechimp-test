export default `
  input CreateCheckListInput {
    name: String
    description: String
    status: String
    isActive: Boolean
  }

  type CheckList {
    name: String
    description: String
    status: String
    isActive: Boolean
  }
`