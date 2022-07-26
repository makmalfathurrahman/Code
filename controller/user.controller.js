const { User } = require("../models");
const { Token } = require("../utility");

class User {
  static async getAllUser(req, res, next) {
    try {
      const userLogin = req.headers.userLogin;
      console.log(userLogin);
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  }

  static async register(req, res, next) {
    try {
      const { name, password } = req.body;
      if (password.length < 8) {
        res.status(400).json({
          msg: "Check data",
        });
      }

      const payload = {
        name,
        password,
      };

      const newUser = await User.create(payload);
      console.log(newUser, "<<<< NEW USER");
      res.status(200).json({
        msg: "Success",
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { name, password } = req.body;
      console.log(req.headers, "<<<< 1");
      const loginUser = await User.findOne({
        where: {
          name: name,
        },
      });

      const _id = loginUser.dataValues.id;
      const _password = loginUser.password;
      if (password !== password) {
        res.status(401).json({
          msg: "Name or password invalid",
        });
      } else {
        const _role = loginUser.dataValues.role;

        const token = Token.generateToken({ name, role: _role });
        if (token) {
          res.headers.token = token;
          console.log(req.headers, "<<<< 2");
          res.status(200).json({ token });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async loginPage(req, res, next) {
    try {
      res.render("login");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
