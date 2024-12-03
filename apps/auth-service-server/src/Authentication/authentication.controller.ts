import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthenticationService } from "./authentication.service";

@swagger.ApiTags("authentications")
@common.Controller("authentications")
export class AuthenticationController {
  constructor(protected readonly service: AuthenticationService) {}

  @common.Get("/auth/google/callback")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GoogleAuthCallback(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GoogleAuthCallback(body);
      }

  @common.Get("/auth/google")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GoogleAuthRedirect(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GoogleAuthRedirect(body);
      }
}
