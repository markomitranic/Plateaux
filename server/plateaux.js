const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', function connection(client) {
    client.gs = gs();
    client.id = guid();
    client.send(JSON.stringify(initializeClientWorld(client)));

    emitToGS(client, JSON.stringify({ status: "clientJoined" }));
    console.log("New client connected to room: " + client.gs);

    client.on('pong', heartbeat);
    client.on('message', function(msg) {
        let message = JSON.parse(msg);

        switch (message.status) {
            case "worldState":
                forwardWorldStateToClient(message);
                break;
            default:
                emitToGS(client, JSON.stringify(message));
        }
    });
    client.on('close', () => {
        emitToGS(client, JSON.stringify({ status: "clientLeft" }));
    });
});

function emitToGS(author, message) {
    server.clients.forEach(function (client) {
        if (client.gs === author.gs) {
            if (client.id !== author.id) {
                client.send(message);
            }
        }
    });
}

function gs() {
    let gsArray = [];

    server.clients.forEach((client) => {
        if (client.gs) {
            if (!gsArray[client.gs]) {
                gsArray[client.gs] = 0;
            }
            gsArray[client.gs]++;
        }
    });

    let gs = 0;

    gsArray.forEach((gsCount, key) => {
        if (gsCount < 3) {
             gs = key;
        }
    });

    if (gs === 0 && gsArray.length > 0) {
        gs = gsArray.length;
    } else {
        gs = 1;
    }

    return gs;
}

function getClientsForGs (gs) {
    let clientsInGs = [];
    server.clients.forEach(function (client) {
        if (client.gs === gs) {
            clientsInGs.push(client.id);
        }
    });
    return clientsInGs;
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

function heartbeat() {
    this.isAlive = true;
}

const interval = setInterval(function ping() {
    server.clients.forEach(function each(client) {
        if (client.isAlive === false) return client.terminate();

        client.isAlive = false;
        client.ping('', false, true);
    });
}, 30000);

function initializeClientWorld(newClient) {

    let gsClients = getClientsForGs(newClient.gs);

    if (gsClients.length <= 1) {
        return generateWorld();
    } else {
        const askMessage = {
            status: "askForWorldState",
            id: newClient.id
        };

        server.clients.forEach((client) => {
            if (client.id === gsClients[0]) {
                client.send(JSON.stringify(askMessage));
            }
        });

        return "waitForWorldState";
    }
}

function forwardWorldStateToClient (message) {
    server.clients.forEach((client) => {
        if (client.id === message.sendTo) {
            const worldState = {
                status: "populateWorld",
                gizmoArray: message.gizmoArray
            };
            client.send(JSON.stringify(worldState));
        }
    });
}

function generateWorld() {
    const radiusMin = 180, // Min radius of the gizmo belt.
        radiusMax = 240; // Max radius of the gizmo belt.

    function distance() {
        return radiusMin + Math.random() * (radiusMax - radiusMin);
    }
    function angle() {
        return Math.random() * Math.PI * 2;
    }
    function elevation() {
        return -10 * Math.random() + 4;
    }

    const response = { status: "populateWorld", gizmoArray: [] };

    response.gizmoArray.push({
        name: 'gizmo_1',
        mesh: 'dodecahedron',
        material: 1,
        distance: distance(),
        angle: angle(),
        elevation: elevation(),
        awake: true
    });

    response.gizmoArray.push({
        name: 'gizmo_2',
        mesh: 'box',
        material: 2,
        distance: distance(),
        angle: angle(),
        elevation: elevation(),
        awake: false
    });

    response.gizmoArray.push({
        name: 'gizmo_3',
        mesh: 'cylinder',
        material: 3,
        distance: distance(),
        angle: angle(),
        elevation: elevation(),
        awake: true
    });

    response.gizmoArray.push({
        name: 'gizmo_4',
        mesh: 'sphere',
        material: 0,
        distance: distance(),
        angle: angle(),
        elevation: elevation(),
        awake: false
    });

    response.gizmoArray.push({
        name: 'gizmo_5',
        mesh: 'cylinder',
        material: 2,
        distance: distance(),
        angle: angle(),
        elevation: elevation(),
        awake: false
    });

    response.gizmoArray.push({
        name: 'gizmo_6',
        mesh: 'dodecahedron',
        material: 2,
        distance: distance(),
        angle: angle(),
        elevation: elevation(),
        awake: false
    });

    response.gizmoArray.push({
        name: 'gizmo_7',
        mesh: 'box',
        material: 3,
        distance: distance(),
        angle: angle(),
        elevation: elevation(),
        awake: false
    });

    response.gizmoArray.push({
        name: 'gizmo_8',
        mesh: 'dodecahedron',
        material: 2,
        distance: distance(),
        angle: angle(),
        elevation: elevation(),
        awake: false
    });

    response.gizmoArray.push({
        name: 'gizmo_9',
        mesh: 'cylinder',
        material: 1,
        distance: distance(),
        angle: angle(),
        elevation: elevation(),
        awake: false
    });

    response.gizmoArray.push({
        name: 'gizmo_10',
        mesh: 'sphere',
        material: 0,
        distance: distance(),
        angle: angle(),
        elevation: elevation(),
        awake: false
    });

    response.gizmoArray.push({
        name: 'gizmo_11',
        mesh: 'sphere',
        material: 0,
        distance: distance(),
        angle: angle(),
        elevation: elevation(),
        awake: false
    });

    return response;
}