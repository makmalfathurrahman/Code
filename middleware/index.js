const { Token } = require("../utility/index");

class Middleware {
  static authentication(req, res, next) {
    try {
      const token = req.headers.token || req.body.token;
      if (payload) {
        next();
      } else {
      }
    } catch (error) {}
  }

  static authorization(req, res, next) {
    try {
      const token = req.headers.token || req.query.token;
      const payload = Token.decudeToken(token);
      const _role = payload && payload.role ? payload.role : null;

      if (_role === "SA") {
        res.headers.userLogin = payload;
        next();
      } else {
        res.status(401).json({ msg: "Unauthorization" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Something wrong",
      });
    }
  }
}

module.exports = Middleware;
