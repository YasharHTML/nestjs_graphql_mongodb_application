import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory,  } from '@nestjs/mongoose';

import { HydratedDocument, Types } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@ObjectType()
@Schema()
export class Post {
  @Field()
  _id: string

  @Prop()
  @Field()
  title: string

  @Prop()
  @Field()
  description: string
}

export const PostSchema = SchemaFactory.createForClass(Post);