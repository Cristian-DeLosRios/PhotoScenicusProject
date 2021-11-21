const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 3000;
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use('/pictures',)

(async function () {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to database");
  } catch (err) {
    throw new Error(err);
  }
})();

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, function () {
  console.log("App listening on port: " + port);
});
