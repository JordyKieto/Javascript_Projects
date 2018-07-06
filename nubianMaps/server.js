var express = require("express");
var http = require("http");

var app = express();
app.use(express.static('static'))

app.get('/api/all', function(request, response) {
    console.log('hit server')
    response.json('ChIJH7nFX2nL1IkRU_vxSxnq7i8')
})

http.createServer(app).listen(8080, function(){
    console.log('Black Biz on 8080')
})