var express = require("express");
var url = require("url");
var querystring = require("querystring");
var bodyParser=require('body-parser');

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/*", function(req, res) {

	var pathName = url.parse(req.url, true).pathname;

	// if (pathName == "/favicon.ico") return;

	res.sendFile(__dirname + "/public/html" + pathName);

	console.info("get-/*-pathName :" + pathName);
});

app.post("/action", function(req, res) {
	// res.send(200, req.body);
	res.status(200).send(req.body);

	console.info("post-/action-req.body: " + JSON.stringify(req.body));
});

// app.get("/", function(req, res) {
// 	res.sendFile(__dirname + "/public/html/" + "index.html");
// });

// app.get("/index4.html", function(req, res) {
// 	var path = url.parse(req.url).path;
// 	var fileName = path.split("/")[1];

// 	res.sendFile(__dirname + "/public/html/" + fileName);

// 	console.info(path + "-" + fileName);
// });

// app.get("/action", function(req, res) {
// 	var params = url.parse(req.url, true).query;
// 	var dataStr = JSON.stringify(params);

// 	res.writeHead(200,{"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});
// 	res.write(dataStr);
// 	res.end();
// 	// console.info(path + "-" + fileName);
// });


var server = app.listen(8081, function() {
	var port = server.address().port;

	console.log("Express listening at port : " + port);
});
 