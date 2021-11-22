const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

//require("dotenv").config({ path: "../.env" });
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
const imgRouter = require('./routes/imgRoutes');

const uri =
  'mongodb+srv://justin:KoLOsJLCTQ1SEMfy@cluster0.muekg.mongodb.net/photoScenicus?retryWrites=true&w=majority';

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/data', (req, res) => {
  res.json(data);
});
console.log(data);

mongoose.connect(uri);



app.use(userRouter);

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
