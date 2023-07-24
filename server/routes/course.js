const express = require("express");
const { getAllUsers } = require("../controller");

const userRouter = express.Router();

userRouter.route("/").get(getAllUsers);

module.exports = userRouter;
