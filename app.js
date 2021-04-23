// jshint esversion:6

// alert('click me for h1 magic');
// $('h1').css('color', 'red');

// const express = require('express');
// const app = express();

// scroll to top code working on desktop not on localhost

var mybutton = document.getElementById('myBtn');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE OPera
}


// above code is for scroll to top 

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + 'images');
});

app.listen(12345, function () {
  console.log('Server has started on port 12345');
});
