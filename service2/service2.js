'use strict';
var http = require('http');

var http = require('http');


http.createServer(onRequest_a).listen(8893);
function onRequest_a (req, res) {
  res.write("Hello from "+ req.client.remoteAddress + ":" +req.client.remotePort+ '\n');
  res.write('to ' + req.client.localAddress + ":" + req.client.localPort);
  res.end();
  }

