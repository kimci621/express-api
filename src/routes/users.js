import { Router } from "express";

const usersRouter = Router();

usersRouter.use((req, res, next) => {
  let date = new Date();
  console.log("USERS обработчик, запрос был сделан в ", date);
  next();
});

usersRouter.get("/", (req, res) => {
  res.status(200).send("users");
});

usersRouter.get("/login", (req, res) => {
  res.status(200).send("login");
});

usersRouter.get("/register", (req, res) => {
  res.status(200).send("register");
});

export { usersRouter };
