const mongoose = require("mongoose");

async function connectDb(url) {
  await mongoose
    .connect(url)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { connectDb };
