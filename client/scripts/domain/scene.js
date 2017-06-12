const radiusMin = 200, // Min radius of the asteroid belt.
    radiusMax = 220, // Max radius of the asteroid belt.
    particleCount = 11, // Ammount of asteroids.
    particleMinRadius = 8, // Min of asteroid radius.
    particleMaxRadius = 20, // Max of asteroid radius.
    planetSize = 50; // Radius of planet.

const colors = {
    green: 0x8fc999,
    blue: 0x5fc4d0,
    orange: 0xee5624,
    yellow: 0xfaff70
};

const mouse = new WHS.VirtualMouseModule(world);
const dynamicGeometry = new WHS.DynamicGeometryModule();
const orbitControls = new WHS.OrbitControlsModule();
const camera = new WHS.CameraModule({
        position: new THREE.Vector3(0, 100, 400),
        far: 2000,
        near: 1
    });
const renderer = new WHS.RenderingModule({
    bgColor: 0x2a3340,

    renderer: {
        antialias: true,
        shadowmap: {
            type: THREE.PCFSoftShadowMap
        }
    }
});

const world = new WHS.App([
    new WHS.ElementModule(),
    new WHS.SceneModule(),
    camera,
    renderer,
    orbitControls,
    new WHS.ResizeModule(),
    mouse
]);

orbitControls.controls.enabled = false;
orbitControls.controls.maxDistance = 800;
orbitControls.controls.minDistance = 100;

const space = new WHS.Group();
space.addTo(world);

new WHS.AmbientLight({
    light: {
        color: 0x663344,
        intensity: 2
    }
}).addTo(world);

new WHS.DirectionalLight({
    light: {
        color: 0xffffff,
        intensity: 1.5,
        distance: 800
    },

    shadowmap: {
        width: 2048,
        height: 2048,

        left: -800,
        right: 800,
        top: 800,
        bottom: -800,
        far: 800
    },

    position: {
        x: 300,
        z: 300,
        y: 100
    }
}).addTo(world);
