// jshint esversion:6

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + 'images');
});

app.listen(3000, function () {
  console.log('Server has started on port 3000');
});
