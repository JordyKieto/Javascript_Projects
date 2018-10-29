const express = require('express');
const app = express();

var messages = [];

const server = app.listen(3001, function(){
    console.log('server is running on port 3001');
});

const io = require('socket.io')(server);


io.on('connection', function(socket) {
    console.log(socket.id)
    socket.on('SEND_MESSAGE', function(data) {
        console.log(data);
        messages = [...messages, data];
        io.emit('MESSAGE', data);
    });
    socket.on('GET_MESSAGES', function() {
        io.emit('MESSAGE_LIST', messages);
    });
});