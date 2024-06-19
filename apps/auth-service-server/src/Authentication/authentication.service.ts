import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthenticationService {
  constructor() {}
  async GoogleAuthCallback(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GoogleAuthRedirect(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
