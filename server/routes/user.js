const express = require("express");
const {
  getAllUsers,
  getUserById,
  getUserByIdAndEdit,
  getUserByIdAndDelete,
  createUser,
} = require("../controller");

const userRouter = express.Router();

userRouter.route("/").get(getAllUsers).post(createUser);

userRouter
  .route("/:id")
  .get(getUserById)
  .patch(getUserByIdAndEdit)
  .delete(getUserByIdAndDelete);

module.exports = userRouter;
