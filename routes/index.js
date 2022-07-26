const route = require("express").Router();
const { UserController, RoomController } = require("../controller/index");
const Middleware = require("../middleware/index");

route.post("/register", UserController.register);
route.post("/login", UserController.login);
route.get("/users", Middleware.authorization, UserController.getAllUsers);

route.get("login-page", UserController.loginPage);
route.get("/", Middleware.authorization, UserController.homePage);

module.exports = route;
