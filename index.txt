const express = require("express");
const app = express();
const route = require("./routes/index");
const port = 3000;

app.use(express.static("views/assets"));
app.set("view engine", "ejs");

app.use(Middleware.getMiddleware);

app.use(route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
