const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized, token is missing!" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.headers.user = decoded.user;
    next();
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(401).json({ msg: "Unauthorized, token isn't valid!" });
  }
};
