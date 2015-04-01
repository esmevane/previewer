var app, express, server;

express = require("express");
app     = express();

app.use(express.static('public'));

server = app.listen(3001, function() {
  console.log("Serving public assets.");
});
