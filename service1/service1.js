'use strict';
const request = require('request');

var http = require('http');
const axios = require('axios');

http.createServer(onRequest_a).listen(8894);
function onRequest_a (req, res) {

  axios.get('http://host.docker.internal:8893/')
  .then(response => {
  res.write(response.data)
  res.end();

  })
  .catch(error => {
    console.log(error);
  });

  res.write("Hello from "+ req.client.remoteAddress + ":" +req.client.remotePort+ '\n');
  res.write('to ' + req.client.localAddress + ":" + req.client.localPort+'\n');

  }

