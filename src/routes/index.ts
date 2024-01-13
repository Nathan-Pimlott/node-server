import { Express } from "express";
import { areNumbersSame } from "../utils/math";

export const routes = (app: Express) => {
  app.post("/", (req, res) => {
    console.log({ body: req.body });

    const { num1, num2 } = req.body;

    const areSame = areNumbersSame(num1, num2);

    const status = areSame ? 200 : 400;
    const resBody = areSame
      ? "Numbers are the same"
      : "Numbers are not the same";

    res.status(status).send(resBody);
  });
};
