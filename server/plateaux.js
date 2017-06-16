const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', function connection(client) {

    client.gs = gs();
    client.id = guid();

    client.on('message', function incoming(msg) {
        let message = JSON.parse(msg);
        emitToGS(client, JSON.stringify(message));
    });
});

function emitToGS(author, message) {

    server.clients.forEach(function (client) {
        console.log(client.id);
        if (client.gs === author.gs) {
            if (client.id !== author.id) {
                client.send(message);
            }
        }
    });


    // server.clients.forEach( (client) => {
    //     if(client.gs === gs){
    //         client.send(message);
    //     }
    // });
}

function gs() {
    return 1;
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}