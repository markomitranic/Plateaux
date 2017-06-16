// Start rendering.
world.start();

// Synchronous event handler for sound preload.
let loadProgress = {
    sound: false,
    server: false,
    serverData: {}
};

setTimeout(() => {
    loadProgress.server = true;
    loadProgress.serverData = serverMock;
    init();
}, 500);

sound.on('load', function(){
    loadProgress.sound = true;
    init();
});

function init() {
    if (!loadProgress.server || !loadProgress.sound) { return; }

    // let curtain = document.getElementById('preloadCurtain');
    // curtain.className += 'fadeOut';
    // setTimeout(() => {
    //     curtain.parent.removeChild(curtain);
    // }, 2000);
    //









    // return;

    newGizmo('gizmo_1', s1, mat[1], loadProgress.serverData.gizmo_1.distance, loadProgress.serverData.gizmo_1.angle, loadProgress.serverData.gizmo_1.elevation, loadProgress.serverData.gizmo_1.awake);
    newGizmo('gizmo_2', s2, mat[2], loadProgress.serverData.gizmo_2.distance, loadProgress.serverData.gizmo_2.angle, loadProgress.serverData.gizmo_2.elevation, loadProgress.serverData.gizmo_2.awake);
    newGizmo('gizmo_3', s3, mat[3], loadProgress.serverData.gizmo_3.distance, loadProgress.serverData.gizmo_3.angle, loadProgress.serverData.gizmo_3.elevation, loadProgress.serverData.gizmo_3.awake);
    newGizmo('gizmo_4', s4, mat[0], loadProgress.serverData.gizmo_4.distance, loadProgress.serverData.gizmo_4.angle, loadProgress.serverData.gizmo_4.elevation, loadProgress.serverData.gizmo_4.awake);
    newGizmo('gizmo_5', s3, mat[2], loadProgress.serverData.gizmo_5.distance, loadProgress.serverData.gizmo_5.angle, loadProgress.serverData.gizmo_5.elevation, loadProgress.serverData.gizmo_5.awake);
    newGizmo('gizmo_6', s1, mat[2], loadProgress.serverData.gizmo_6.distance, loadProgress.serverData.gizmo_6.angle, loadProgress.serverData.gizmo_6.elevation, loadProgress.serverData.gizmo_6.awake);
    newGizmo('gizmo_7', s2, mat[3], loadProgress.serverData.gizmo_7.distance, loadProgress.serverData.gizmo_7.angle, loadProgress.serverData.gizmo_7.elevation, loadProgress.serverData.gizmo_7.awake);
    newGizmo('gizmo_8', s1, mat[2], loadProgress.serverData.gizmo_8.distance, loadProgress.serverData.gizmo_8.angle, loadProgress.serverData.gizmo_8.elevation, loadProgress.serverData.gizmo_8.awake);
    newGizmo('gizmo_9', s3, mat[1], loadProgress.serverData.gizmo_9.distance, loadProgress.serverData.gizmo_9.angle, loadProgress.serverData.gizmo_9.elevation, loadProgress.serverData.gizmo_9.awake);
    newGizmo('gizmo_10', s4, mat[0], loadProgress.serverData.gizmo_10.distance, loadProgress.serverData.gizmo_10.angle, loadProgress.serverData.gizmo_10.elevation, loadProgress.serverData.gizmo_10.awake);
    newGizmo('gizmo_11', s4, mat[0], loadProgress.serverData.gizmo_11.distance, loadProgress.serverData.gizmo_11.angle, loadProgress.serverData.gizmo_11.elevation, loadProgress.serverData.gizmo_11.awake);
}

function distance() {
    return radiusMin + Math.random() * (radiusMax - radiusMin);
}
function angle() {
    return Math.random() * Math.PI * 2;
}
function elevation() {
    return -10 * Math.random() + 4;
}

let serverMock = {
    gizmo_1: { distance: distance(), angle: angle(), elevation: elevation(), awake: true },
    gizmo_2: { distance: distance(), angle: angle(), elevation: elevation(), awake: true },
    gizmo_3: { distance: distance(), angle: angle(), elevation: elevation(), awake: false },
    gizmo_4: { distance: distance(), angle: angle(), elevation: elevation(), awake: false },
    gizmo_5: { distance: distance(), angle: angle(), elevation: elevation(), awake: false },
    gizmo_6: { distance: distance(), angle: angle(), elevation: elevation(), awake: false },
    gizmo_7: { distance: distance(), angle: angle(), elevation: elevation(), awake: false },
    gizmo_8: { distance: distance(), angle: angle(), elevation: elevation(), awake: false },
    gizmo_9: { distance: distance(), angle: angle(), elevation: elevation(), awake: false },
    gizmo_10: { distance: distance(), angle: angle(), elevation: elevation(), awake: false },
    gizmo_11: { distance: distance(), angle: angle(), elevation: elevation(), awake: false },
};