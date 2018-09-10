const rootMutation = `
  type Mutation {
    createCheckList(input: CreateCheckListInput): CheckList
    deleteCheckList(input: CheckListParamsInput): Boolean
  }
`

export default rootMutation
