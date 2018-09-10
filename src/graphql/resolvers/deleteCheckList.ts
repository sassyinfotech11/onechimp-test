import { IContext, ICheckListParamsInput } from '../../types/GqlSchema.type'

export default {
    Mutation: {
        async deleteCheckList(
            rootValue: any,
            { userParams }: { userParams: ICheckListParamsInput },
            { models }: IContext
        ): Promise<boolean> {
            const checklist = await models.CheckList.findById(userParams)

            if (!checklist) {
                throw new Error('Unable to find checklist')
            }

            await checklist.update({ isActive: false })

            return true
        }
    }
}
