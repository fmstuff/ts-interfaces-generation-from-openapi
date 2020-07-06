import { Router } from "express";

import { getJellyBeans } from "../controllers/getJellyBeans/getJellyBeans.controller";

export class JellyBeansRouter {
  public readonly router: Router;
  constructor() {
    this.router = Router();

    this.router.get("/", getJellyBeans);
  }
}
