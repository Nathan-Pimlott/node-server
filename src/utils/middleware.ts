import { RequestHandler } from "express";

export const authMiddleware: RequestHandler = (req, res, next) => {
  const { token = "" } = req.headers;

  if (!token) {
    return res.status(403).send("Unable to authenticate request");
  }

  return next();
};
