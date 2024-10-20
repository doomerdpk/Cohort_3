const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "deepak@123";
const app = express();
const cors = require("cors");
app.use(cors());

const users = [];

app.use(express.json());

function auth(req, res, next) {
  const token = req.headers.token;
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        res.json({
          error: "You are not authorized!",
        });
      } else {
        req.username = decoded.username;
        next();
      }
    });
  } else {
    res.json({
      error: "you are not authorized!",
    });
  }
}

app.post("/signup", function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({
      error: "Please provide your credientials to register!",
    });
  }

  const user = users.find((user) => user.username == req.body.username);

  if (user) {
    res.json({
      error:
        "User with this username already exists, Please provide an unique username to register!",
    });
  }

  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "You have successfully signed up!",
  });
});

app.post("/signin", function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({
      error: "Please provide your credientials to Sign-in!",
    });
  }

  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(function (user) {
    if (user.username == username && user.password == password) {
      return true;
    }
  });

  if (!user) {
    res.json({
      error: "Invalid Credientials",
    });
  } else {
    let token = jwt.sign(
      {
        username: user.username,
      },
      JWT_SECRET
    );
    res.json({
      message: "You have successfully signed-in",
      token: token,
    });
  }
});

app.get("/me", auth, function (req, res) {
  //For username, we will not have to hit the database as we have encoded that information in jwt
  //For password, we have to hit the database

  const user = users.find((user) => user.username == req.username);

  if (user) {
    res.json({
      username: user.username,
      password: user.password,
    });
  } else {
    res.json({
      error: "Not a valid user!",
    });
  }
});

app.listen(3000);
