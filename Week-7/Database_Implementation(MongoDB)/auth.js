const jwt = require("jsonwebtoken");
const JWT_SECRET = "aiwilldoom@#8128";

function authentication(req, res, next) {
  const token = req.headers.token;

  const verifiedToken = jwt.verify(token, JWT_SECRET);

  if (verifiedToken) {
    req.userId = verifiedToken.id;
    next();
  } else {
    res.status(403).json({
      error: "Incorrect credientials!",
    });
  }
}

module.exports = {
  authentication,
  JWT_SECRET,
  jwt,
};
