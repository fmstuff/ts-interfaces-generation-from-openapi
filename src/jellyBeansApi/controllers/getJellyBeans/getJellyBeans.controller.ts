import { Request, Response, NextFunction } from "express";

export async function getJellyBeans(
  _request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    response.send("There be Jelly Beans!!!");
  } catch (err) {
    next(err);
  }
}
