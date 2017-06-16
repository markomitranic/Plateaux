// Start rendering.
world.start();

// Synchronous event handler for sound preload.
let loadProgress = {
    sound: false,
    server: false,
    serverData: {}
};

function serverPopulate (data) {
    loadProgress.server = true;
    loadProgress.serverData = data;
    init();
}

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


    loadProgress.serverData.forEach((gizmo, key) => {
        newGizmo(
            gizmo.name,
            getMesh(gizmo.mesh),
            getMaterial(gizmo.material),
            gizmo.distance,
            gizmo.angle,
            gizmo.elevation,
            gizmo.awake
        );
    });
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