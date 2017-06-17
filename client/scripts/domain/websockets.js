const socket = new WebSocket('ws://'+window.location.host+'/server');

socket.addEventListener('error', (message) => {
    console.log("Socket connection error.");
});

socket.addEventListener('open', (message) => {
    console.log("Socket connection open!");
});

socket.addEventListener('close', (message) => {
    console.log("Socket connection closed!");
});

socket.addEventListener('message', (msg) => {
    eventHandler(JSON.parse(msg.data));
});

function socketEmit(emitType, data) {
    let gizmoData = new GizmoMessage(data);

    switch (emitType) {
        case "gizmoHold":
            gizmoData.status = "gizmoHold";
            socket.send(JSON.stringify(gizmoData));
            break;
        case "gizmoLerp":
            gizmoData.status = "gizmoLerp";
            socket.send(JSON.stringify(gizmoData));
            break;
        case "gizmoSleep":
            gizmoData.status = "gizmoSleep";
            socket.send(JSON.stringify(gizmoData));
            break;
        case "gizmoWake":
            gizmoData.status = "gizmoWake";
            socket.send(JSON.stringify(gizmoData));
            break;
        case "worldState":
            socket.send(JSON.stringify(data));
            break;
    }
}

function eventHandler (data) {
    let gizmo = gizmos.children[findGizmoKey(data.name)];

    switch (data.status) {
        case "gizmoHold":
            gizmo.data.remotePickup(data);
            break;
        case "gizmoLerp":
            gizmo.data.remoteLerpToOrbit(data);
            break;
        case "gizmoSleep":
            gizmo.data.remotePutToSleep(data);
            break;
        case "gizmoWake":
            gizmo.data.remoteWakeUp(data);
            break;
        case "populateWorld":
            serverPopulate(data.gizmoArray);
            break;
        case "askForWorldState":
            sendWorldState(data);
            break;
        case "waitForWorldState":
            console.log('There are people in the room, waiting for their worldState.');
            break;

    }
}

class GizmoMessage {
    constructor (gizmo) {
        this.angle = gizmo.angle;
        this.distance = gizmo.distance;
        this.elevation = gizmo.elevation;
        this.name = gizmo.name;
        this.status = gizmo.status;
        this.position = gizmo.position;
        this.lerpTo = gizmo.lerpTo;
    }
}
