import { Router } from "express";

const usersRouter = Router();

usersRouter.use((req, res, next) => {
  console.log("USERS обработчик, запрос был сделан в ", Date.now());
  next();
});

//Можно слушать основной url и отпочковать от него другие связанные методы
// app
//   .route("/user")
//   .get((req, res) => {
//     res.send("user name is express!");
//   })
//   .post((req, res) => {
//     res.send("user name is express!");
//   });
//Но лучше вынести как тут в отдельный файл и импортировать в главный с помощью app.use('/main_url', RouteVar)

usersRouter.get("/login", (req, res) => {
  res.send("login");
});

usersRouter.get("/register", (req, res) => {
  res.send("register");
});

export { usersRouter };
