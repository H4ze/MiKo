/**
 * UI5 WebSocket minimalistic chat example by Holger Schäfer
 * using node.js and NPM package ws
 */

var express,
	path,
	WebSocketServer,
	wss,
	httpPort = process.env.PORT || 80,
	wsPort = 8080,
	app;

express = require("express");
path = require("path");

app = express();

// all environments
express.static.mime.default_type = "text/xml";
app.use(express.compress());
app.use(express.static(path.join(__dirname, "public")));

// development only
if (app.get("env") === "development") {
	app.use(express.errorHandler());
}

// start web socket server
WebSocketServer = require("ws").Server;
wss = new WebSocketServer({
	port: wsPort
});

wss.broadcast = function(data) {
	"use strict";
	for (var i in this.clients)
		this.clients[i].send(data);
	console.log("broadcasted: %s", data);
};

wss.on("connection", function(ws) {
	"use strict";
	ws.on("message", function(message) {
		console.log("received: %s", message);
		wss.broadcast(message);
	});
	ws.send(JSON.stringify({
		user: "NODEJS",
		text: "Hallo from server"
	}));
});

// start http server
app.listen(httpPort, function() {
	"use strict";
	console.log("HTTP Server: http://localhost:" + httpPort);
	console.log("WS Server: ws://localhost:" + wsPort);
});
