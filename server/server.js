// require("dotenv").config({ path: "../.env" });
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
const imageRouter = require('./routes/imageRoutes');
const cors = require('cors')//new

// const uri = process.env.MONGO_URI;

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require('path');

//api/static

//app.use("/static", express.static(path.join(__dirname ,'public')));

// app.use('/data', (req, res) => {
//   res.json(data);
// });
// console.log(data);

// mongoose.connect(uri);

mongoose.connect(
  'mongodb+srv://justin:KoLOsJLCTQ1SEMfy@cluster0.muekg.mongodb.net/photoScenicus?retryWrites=true&w=majority'
);

app.use(userRouter);
app.use(imageRouter);

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, function () {
  console.log('App listening on port: ' + port);
});
