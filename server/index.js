const express = require("express");
const bodyParser = require("body-parser");
const { connectDb } = require("./db/connection");
const userRouter = require("./routes/user");

const app = express();
const PORT = 3000;

connectDb("mongodb://localhost:27017/Corsea"); // Database Connection

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
