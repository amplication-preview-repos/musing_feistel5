import * as graphql from "@nestjs/graphql";
import { AuthenticationService } from "./authentication.service";

export class AuthenticationResolver {
  constructor(protected readonly service: AuthenticationService) {}

  @graphql.Mutation(() => String)
  async GoogleAuthCallback(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GoogleAuthCallback(args);
  }

  @graphql.Query(() => String)
  async GoogleAuthRedirect(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GoogleAuthRedirect(args);
  }
}
