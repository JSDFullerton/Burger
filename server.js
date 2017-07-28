// REQUIRED NPM PACKAGES
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

// ACTIVATE EXPRESS
var app = express();

// PORT FOR HEROKU
var PORT = process.env.PORT || 8080;

// SERVE STATIC CONTENT TO APP FROM "PUBLIC" DIR
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// OVERRIDE w/ POST - ?_method=DELETE
app.use(methodOverride("_method"));

// EXPRESS APP - handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// ROUTE FILES - HTML & API
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);




// ACTIVATE SERVER LISTENING FUNC
app.listen(PORT, function() {

  console.log("APP IS LISTENING ON: " + PORT);

});// close app listen func