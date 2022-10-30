//app это express() 
//тут основные фичи express

//midleware промежутечный запрос, которые при помощи метода next может вызвать следующий запрос или не вызвать ничего вовсе,
//будет слушать все запросы на указанный url
app.all("/get_names", (req, res, next) => {
  console.log("All");
  //последовательность решает, поэтому если другой запрос с таким же url будет выше all, то выполнится он и all прогинорируется
  //Просто вызывает следующий запрос с таким же url
  next();
});

//базовый get запрос
app.get("/get_names", (req, res) => {
  res.send("Igor, Alex, John");
});

app.get("/test", (req, res) => {
  //метод end завершает запрос и не дает идти дальше
  res.status(404).end();
  //задать тип Content-Type
  res.type("application/json");
  //вручную задать тип заголовка
  res.set("content-Type", "text/plain");
  //вручную добавить кастомный заголовок с его кастомным типом
  res.append("Warning", "code");
  //вручную указать статус и тип ответа
  res.status(200).json({ success: true });
  //дать на скачивание файл и по-желанию поменять имя файлу перед отдачей
  res.download("./assets/images/123.png", "custon_name.png");
  //редирект на любую другую страницу в тч на чужой домен
  res.redirect(301, "http://localhost:3000/get_names");
  //res включает в себя и куки
  res.cookie("someToken", "value", {
    domain: "",
    path: "/",
    secure: true, //
    expires: 600000, //когда удалится кука
  });
  res.clearCookie("someToken");
});

/*
  Можно добавить еще несколько коллбеков для любого запроса
  */
const cb = (req, res, next) => {
  console.log("cb");
  next();
};
const cb2 = (req, res, next) => {
  console.log("cb2");
  next();
};
const cb3 = (req, res, next) => {
  console.log("cb3");
  next();
};
//В результате сначала выполнятся все коллбэки и в конце сам коллбэк запроса
app.get("/cb_test", [
  cb,
  cb2,
  cb3,
  (req, res) => {
    res.send("Все коллбэки успешно отработали!");
  },
]);

/*
  Манипуляции с url
  ? - te?st = te, test
  + - te+st = test, teeest
  * - te*st = test, teashsdf
  (some)? - te(here)?st = test, testherest
  Так же принимается RegExp
  */

//основные методы
app.post("/post_names", (req, res) => {
  res.send("hello express!");
});
app.put("/put_names", (req, res) => {
  res.send("hello express!");
});
app.patch("/patch_names", (req, res) => {
  res.send("hello express!");
});
app.delete("/delete_names", (req, res) => {
  res.send("hello express!");
});
