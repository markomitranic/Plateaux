const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', function connection(socket) {

    socket.on('message', function incoming(message) {
        console.log('Client: %s', message);
    });

    socket.send('Hello my dear client!');

});