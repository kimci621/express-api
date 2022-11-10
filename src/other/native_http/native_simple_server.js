import http from "http";

const host = "127.0.0.1";
const port = 8080;

//request - запрос на сервер
//responce - ответ от сервера

const resturnAnswer = (res, type, end) => {
  res.statusCode = 200;
  res.setHeader("Content-type", type);
  res.end(end);
};

const server = http.createServer((request, responce) => {
  switch (request.method) {
    case "GET":
      switch (request.url) {
        case "get_name":
          resturnAnswer(
            responce,
            "text/plain",
            "My name is node js http native server!"
          );
          break;
      }
      resturnAnswer(responce, "text/plain", "It is answer from GET request!");
      break;
    case "POST":
      resturnAnswer(responce, "text/plain", "It is answer from POST request!");
      break;
    case "PUT":
      resturnAnswer(responce, "text/plain", "It is answer from PUT request!");
      break;
    case "DELETE":
      resturnAnswer(
        responce,
        "text/plain",
        "It is answer from DELETE request!"
      );
      break;
  }
});

//случшаем http сервер на указанных портах,
server.listen(port, host, () => {
  console.log("сервер запущен на ", `${port} порте и`, `с хостом ${host}`);
});
