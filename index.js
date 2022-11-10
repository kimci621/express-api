import express from "express";
import { usersRouter } from "./src/routes/users.js";
import { productsRouter } from "./src/routes/products.js";

const port = 8000;
const app = express();

// oбработчик пишут перед основными запросами чтобы их перехватывать например для логирования
app.use((req, res, next) => {
  let date = new Date();
  console.log("Запрос сделан в ", date);
  next();
});

//routes
app.get("/about", (req, res) => {
  res.status(200).send("about");
});
app.get("/", (req, res) => {
  res.status(200).send("main page");
});
//main with childs
app.use("/users", usersRouter);
app.use("/products", productsRouter);

//обработчик ошибок, обязательно должен быть вызван самым последним из всех use -ов
//нужно обработать 404
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send(err.message);
});

app.listen(port, () => {
  console.log("Сервер запущен на http://localhost:", `${port}`);
});
