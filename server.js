const express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var exphb = require("express-handlebars");
var router = require("./controllers/burger_controller.js");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphb({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(router);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})