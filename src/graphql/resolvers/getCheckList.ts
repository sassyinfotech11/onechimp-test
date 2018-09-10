import { CheckList } from '../../models/schemas/checkList'
import { IContext } from '../../types'
import { ICheckListParamsInput } from '../../types/GqlSchema.type'

export default {
    Query: {
        async getCheckList(
            rootValue: object,
            args: ICheckListParamsInput,
            { models, viewer }: IContext
        ): Promise<CheckList> {
            const checkList = await models.CheckList.findOne(args)

            if (!checkList) {
                throw new Error('CheckList not found')
            }

            return checkList.toObject()
        }
    }
}
