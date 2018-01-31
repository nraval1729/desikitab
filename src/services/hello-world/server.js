var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.send("Hello World updated second time!")
});

app.listen(process.env.PORT || 8080, function() {
	console.log("Server started!");
});
