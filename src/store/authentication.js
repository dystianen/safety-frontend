import { makeAutoObservable } from "mobx";

export class AuthenticationStore {
  ctx;

  constructor(ctx) {
    makeAutoObservable(this);
    this.ctx = ctx;
  }
}
