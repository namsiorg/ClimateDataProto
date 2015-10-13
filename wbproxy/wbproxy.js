var express = require('express');  
var request = require('request');

var app = express();  
var apiServerHost = 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country';

app.use('/', function(req, res) {  
  var url = apiServerHost + req.url;
  // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://toolandconcept.com');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT');/*, PATCH, DELETE'*/
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  req.pipe(request(url)).pipe(res);
});

app.listen(5000); 
