const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const path = require('path'); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(port, function () {
    console.log('App listening on port: ' + port);
   });