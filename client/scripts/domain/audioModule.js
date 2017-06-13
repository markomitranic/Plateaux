const sound = new Howl({
    src: [
        "/assets/audio/marko.ogg",
        "/assets/audio/marko.m4a",
        "/assets/audio/marko.mp3",
        "/assets/audio/marko.ac3"
    ],
    preload: true,
    loop: true,
    "sprite": {
        gizmo_1: [ 0, 10866.938775510205 ],
        gizmo_2: [ 12000, 130890.88435374148 ],
        gizmo_3: [ 144000, 130983.7641723356 ],
        gizmo_4: [ 276000, 132098.32199546485 ],
        gizmo_5: [ 410000, 132028.66213151923 ],
        gizmo_6: [ 544000, 131982.22222222216 ],
        gizmo_7: [ 677000, 131982.22222222216 ],
        gizmo_8: [ 810000, 130403.26530612243 ],
        gizmo_9: [ 942000, 132051.88208616778 ],
        gizmo_10: [ 1076000, 131982.22222222216 ],
        gizmo_11: [ 1209000, 131982.22222222216 ]
    }
});

const soundIdsCache = {
    gizmo_1: 0,
    gizmo_2: 0,
    gizmo_3: 0,
    gizmo_4: 0,
    gizmo_5: 0,
    gizmo_6: 0,
    gizmo_7: 0,
    gizmo_8: 0,
    gizmo_9: 0,
    gizmo_10: 0,
    gizmo_11: 0,
};

document.addEventListener('gizmoSleep', function (e) {
    sound.stop(soundIdsCache[e.detail.name]);
});

document.addEventListener('gizmoWake', function (e) {
    soundIdsCache[e.detail.name] = sound.play(e.detail.name);
});