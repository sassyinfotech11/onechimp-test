import { CheckList } from '../../models/schemas/checkList'
import { IContext, ICreateCheckListInput } from '../../types'

export default {
    Mutation: {
        async createCheckList(
            rootValue: object,
            { input }: { input: ICreateCheckListInput },
            { models }: IContext
        ): Promise<CheckList> {
            // create a new checklist, then return the new checklist object
            const { name, description, status, isActive } = input

            const checklist = await models.CheckList.create({
                name,
                description,
                status,
                isActive
            })

            console.log(checklist);

            return checklist.toObject()
        }
    }
}
