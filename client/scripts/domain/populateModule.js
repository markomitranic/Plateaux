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

    let curtain = document.getElementById('preloadCurtain');
    curtain.className += 'fadeOut';
    setTimeout(() => {
        curtain.style.display = 'none';
    }, 2000);


    loadProgress.serverData.forEach((gizmo, key) => {
        newGizmo(
            gizmo.name,
            gizmo.mesh,
            gizmo.material,
            gizmo.distance,
            gizmo.angle,
            gizmo.elevation,
            gizmo.awake,
            gizmo.position || null
        );
    });
}
