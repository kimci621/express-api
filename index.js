import express from "express";
import { usersRouter } from "./api/routes/users.js";

const port = 8000;
const app = express();

app.use("/users", usersRouter);

//Можно обрабатывать абсолютно все запросы к нашему серверу
//В основном  используют для логирования всех запросов и дальнейший манипуляций с ними
app.use((req, res, next) => {
  console.log("Запрос был сделан в ", Date.now());
  next();
});
//можно так же слушать один основной url и его вложенности
app.use("/hello", (req, res, next) => {
  console.log("Hello url, запрос был сделан в ", Date.now());
  next();
});
app.get("/hello", (req, res) => {
  //res.send("Hello from express!");
  //для теста ошибки
  throw new Error("Это просто ошибка, не обращай внимания и иди дальше...");
});

//обработчик ошибок, обязательно должен быть вызван самым последним из всех use -ов
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send(err.message);
});

//запуск сервера
app.listen(port, () => {
  console.log("Сервер запущен на http://localhost:", `${port}`);
});

/*
    Жизненный цикл expressjs 
    POST  ->  app.use -> router.use -> router.get('/some', [cb1, cb2, cb3] -> app.use((err, ...)))
*/
