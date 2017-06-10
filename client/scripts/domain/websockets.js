var socket = new WebSocket('ws://'+window.location.host+'/server');

socket.addEventListener('error', function (message) {
    console.log("Socket connection error.");
});
socket.addEventListener('open', function (message) {
    console.log("Socket connection open!");
    socket.send('Hello mister server!');
});
socket.addEventListener('message', function (message) {
    console.log("Server: " + message.data);
});
