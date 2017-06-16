const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', function connection(client) {

    client.gs = gs();
    client.id = guid();

    client.send(JSON.stringify(populateWorld()));

    client.on('message', function incoming(msg) {
        let message = JSON.parse(msg);
        emitToGS(client, JSON.stringify(message));
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

let gsArray = [];

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

function populateWorld() {
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