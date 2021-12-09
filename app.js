const express = require("express");
var app = express();

// Set template engine
app.set('view engine', 'ejs')

// Bind the app to a specified port
var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port " + port);



// Set up the GET route
app.get('/', function (req, res) {
  res.render('index', {});
});