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

socket.addEventListener('message', (message) => {
    let remoteGizmo = JSON.parse(message.data);
    eventHandler(remoteGizmo);
});

function socketEmit(emitType, gizmoData) {
    let data = new GizmoMessage(gizmoData);

    switch (emitType) {
        case "gizmoHold":
            data.status = "gizmoHold";
            socket.send(JSON.stringify(data));
            break;
        case "gizmoLerp":
            data.status = "gizmoLerp";
            socket.send(JSON.stringify(data));
            break;
        case "gizmoSleep":
            data.status = "gizmoSleep";
            socket.send(JSON.stringify(data));
            break;
        case "gizmoWake":
            data.status = "gizmoWake";
            socket.send(JSON.stringify(data));
            break;
    }
}

function eventHandler (remoteGizmo) {
    let gizmo = gizmos.children[findGizmoKey(remoteGizmo.name)];

    switch (remoteGizmo.status) {
        case "gizmoHold":
            gizmo.data.remotePickup(remoteGizmo);
            break;
        case "gizmoLerp":
            gizmo.data.remoteLerpToOrbit(remoteGizmo);
            break;
        case "gizmoSleep":
            gizmo.data.remotePutToSleep(remoteGizmo);
            break;
        case "gizmoWake":
            gizmo.data.remoteWakeUp(remoteGizmo);
            break;
        case "populateWorld":
            serverPopulate(remoteGizmo.gizmoArray);
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
