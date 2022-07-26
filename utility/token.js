const jwt = require("jsonwebtoken");

class Token {
  static generateToken(payload) {
    try {
      const token = jwt.sign(payload, secret);
      return token;
    } catch (error) {
      consolelog(error);
    }
  }

  static decodeToken(token) {
    try {
      const payload = jwt.sign;
    } catch (error) {}
  }
}

module.exports = Token;
