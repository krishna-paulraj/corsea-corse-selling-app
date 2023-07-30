require("dotenv").config();

const PORT = process.env.PORT;
const dbHost = process.env.DB_HOST;

const express = require("express");
const bodyParser = require("body-parser");
const { connectDb } = require("./db/connection");
const userRouter = require("./routes/user");

const app = express();

connectDb(dbHost); // Database Connection

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes

app.get("/", (req, res) => {
  res.json({ message: "Working fine" });
});

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server Started on port: ${PORT}`);
});
