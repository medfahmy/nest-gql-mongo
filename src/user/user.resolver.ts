import { Query, Resolver, Mutation, Args } from "@nestjs/graphql";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserInput } from "./input/user.input";
import { User } from "./interfaces/user.interface";
import { UserService } from "./user.service";

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => String)
  async hello() {
    return "hello";
  }

  @Query(() => CreateUserDto)
  async users() {
    return this.userService.findAll();
  }

  @Mutation(() => CreateUserDto)
  async createUser(@Args("input") input: UserInput) {
    return this.userService.create(input);
  }
}
