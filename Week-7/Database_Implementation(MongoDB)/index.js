const express = require("express");
const app = express();
const { userModel, todoModel } = require("./database");
const { authentication, JWT_SECRET, jwt } = require("./auth");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { z } = require("zod");

app.use(express.json());

app.post("/signup", async function (req, res) {
  //Define the zod schema
  const requiredSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8)
      .max(16)
      .regex(/[a-z]/)
      .regex(/[A-Z]/)
      .regex(/[\W_]/),
    name: z.string().min(5).max(100),
  });

  const parsedWithSuccess = requiredSchema.safeParse(req.body);

  if (!parsedWithSuccess.success) {
    res.json({
      error: parsedWithSuccess.error,
    });
    return;
  }

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  if (!name || !email || !password) {
    res.status(400).json({
      error: "Please provide the correct credientials to sign-up!",
    });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 5);

  try {
    await userModel.create({
      email: email,
      name: name,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "You are successfully signed-up!",
    });
  } catch (error) {
    res.status(422).json({
      error: "Already exists, Please use another email!",
    });
  }
});

app.post("/login", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(400).json({
      error: "Please provide your credientials for login!",
    });
    return;
  }

  const response = await userModel.findOne({
    email: email,
  });
  const passwordMatch = bcrypt.compare(password, response.password);
  if (response && passwordMatch) {
    const token = jwt.sign(
      {
        id: response._id,
      },
      JWT_SECRET
    );

    res.status(200).json({
      messgae: "Successfully logged in!",
      token: token,
    });
  } else {
    res.status(403).json({
      error: "Incorrect credientials!",
    });
  }
});

app.post("/create-todo", authentication, async function (req, res) {
  const title = req.body.title;
  const done = req.body.done;
  const userId = req.userId;
  try {
    await todoModel.create({
      userId: userId,
      title: title,
      done: done,
    });

    res.json({
      message: `Successfully created a Todo with title ${title}`,
    });
  } catch (error) {
    res.json({
      error: "Error creating Todo!",
    });
  }
});

app.get("/fetch-todos", authentication, async function (req, res) {
  try {
    const response = await todoModel.find({
      userId: req.userId,
    });
    res.json({
      response,
    });
  } catch (error) {
    res.json({
      error: "Error Fetching the todos!",
    });
  }
});

async function connectDatabase_StartServer() {
  try {
    await mongoose.connect(
      "mongodb+srv://doomerdpk:oKJJ5BH7UcwDyXUt@cluster0.2zp5i.mongodb.net/Todo_Database"
    );

    console.log("Successfully connected to the database!");
    app.listen(3000, function () {
      console.log("Backend is running on http://localhost:3000");
    });
  } catch (error) {
    console.log("Error connecting to the database!");
  }
}
connectDatabase_StartServer();
