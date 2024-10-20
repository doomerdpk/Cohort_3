const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//User Schema for storing users data in "User_data" Collection
const User = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

//Todo Schema for storing todos data in the "Todos_data" collection
const Todo = new Schema({
  userId: ObjectId,
  title: String,
  done: Boolean,
});

//Creating Models to perform operations on the data present in the specific collection
const userModel = mongoose.model("Users", User);
const todoModel = mongoose.model("Todos", Todo);

//Exporting userModel and todoModel
module.exports = {
  userModel,
  todoModel,
};
