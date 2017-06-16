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
    var event = new CustomEvent('gizmoRemoteHold', { 'detail': remoteGizmo });
    document.dispatchEvent(event);
});

document.addEventListener('gizmoHold', (event) => {
    socket.send(JSON.stringify(new GizmoMessage(event.detail)));
});


class GizmoMessage {
    constructor (gizmo) {
        this.angle = gizmo.angle;
        this.distance = gizmo.distance;
        this.elevation = gizmo.elevation;
        this.name = gizmo.name;
        this.status = gizmo.status;
        this.position = gizmo.position;
    }
}
