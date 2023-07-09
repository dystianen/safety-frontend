import { authenticationRepository } from "@/repository/authentication";
import { makeAutoObservable } from "mobx";

export class AuthenticationStore {
  isLoggedIn = false;
  ctx;

  constructor(ctx: any) {
    makeAutoObservable(this);
    this.ctx = ctx;
  }

  async login({ email, password }: { email: string, password: string }) {
    try {
      const result = await authenticationRepository.api.login({ email, password })
    } catch (e) {
      throw e;
    }
  }

  logout() {
    this.isLoggedIn = false;
  }
}
