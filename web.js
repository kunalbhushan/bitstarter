var fs=require('fs');
 buff = new Buffer(fs.readFileSync('index.html','utf8'));




var express=require('express');
var app=express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send("what the hell");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
