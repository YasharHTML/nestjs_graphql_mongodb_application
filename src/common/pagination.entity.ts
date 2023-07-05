import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class Pagination {
  @Field()
  page: number;

  @Field()
  limit: number;
}
