import { Router } from "express";

const productsRouter = Router();

productsRouter.use((req, res, next) => {
  let date = new Date();
  console.log("products обработчик, запрос был сделан в ", date);
  next();
});

productsRouter.get("/", (req, res) => {
  res.status(200).send("products");
});

productsRouter.get("/new", (req, res) => {
  res.status(200).send("new product");
});

productsRouter.get("/edit", (req, res) => {
  res.status(200).send("edit product");
});

export { productsRouter };
