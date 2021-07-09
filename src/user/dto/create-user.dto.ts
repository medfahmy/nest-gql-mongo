import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreateUserDto {
  @Field(() => ID)
  readonly id: string;

  @Field()
  readonly username: string;

  @Field()
  readonly email: string;

  @Field()
  readonly password: string;
}
