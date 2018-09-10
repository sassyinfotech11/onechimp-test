import { Request } from 'express'
import { ModelType, InstanceType } from 'typegoose'

import { CheckList } from '../models/schemas/checkList'

export interface IContext {
  req?: Request
  models: {
    CheckList: ModelType<CheckList> & CheckList & typeof CheckList
  }
  viewer?: InstanceType<any>
}

export interface ICreateCheckListInput {
  name: string
  description: string
  status: string
  isActive: boolean
}

export interface ICheckListParamsInput {
  id: string
}