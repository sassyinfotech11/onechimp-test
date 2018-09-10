import { prop, Typegoose } from 'typegoose'

export class CheckList extends Typegoose {
  @prop()
  name: string;

  @prop()
  description: string;

  @prop()
  status: string;

  @prop({ default: true })
  isActive: boolean;
}

export const model = new CheckList().getModelForClass(CheckList)
