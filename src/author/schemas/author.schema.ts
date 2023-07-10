import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class Author  {
  @Prop()
  name: string;

  @Prop()
  id:string;

}

export const AuthorSchema = SchemaFactory.createForClass(Author);
