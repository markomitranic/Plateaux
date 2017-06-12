const gizmos = new WHS.Group();
gizmos.addTo(space);

// Create Gizmos
newGizmo(s1, mat[1]);
newGizmo(s2, mat[2]);
newGizmo(s3, mat[3]);
newGizmo(s4, mat[0]);
newGizmo(s3, mat[2]);
newGizmo(s1, mat[2]);
newGizmo(s2, mat[3]);
newGizmo(s1, mat[2]);
newGizmo(s3, mat[1]);
newGizmo(s4, mat[0]);
newGizmo(s4, mat[0]);

// Animating rotating shapes around planet.
const animation = new WHS.Loop(() => {
    for (let i = 0, max = gizmos.children.length; i < max; i++) {
        const particle = gizmos.children[i];

        if (particle.status.isHold) {
            particle.position.copy(mouse.project());
        } else if (particle.status.isLerping) {
            particle.rotation.x += Math.PI / 60;
            particle.rotation.y += Math.PI / 60;
        } else if (particle.status.isSleeping) {

        } else {
            particle.data.angle += 0.005 * particle.data.distance / radiusMax;
            particle.position.x = Math.cos(particle.data.angle) * particle.data.distance;
            particle.position.z = Math.sin(particle.data.angle) * particle.data.distance;
            particle.rotation.x += Math.PI / 120;
            particle.rotation.y += Math.PI / 120;
        }
    }
});
world.addLoop(animation);
animation.start();

function newGizmo (mesh, material) {
    const radiusMin = 200, // Min radius of the asteroid belt.
        radiusMax = 220, // Max radius of the asteroid belt.
        particleMinRadius = 8, // Min of asteroid radius.
        particleMaxRadius = 20; // Max of asteroid radius.

    const particle = mesh.clone();
    const radius = particleMinRadius + Math.random() * (particleMaxRadius - particleMinRadius);

    particle.g_({
        radiusBottom: radius,
        radiusTop: 0,
        height: particle instanceof WHS.Cylinder ? radius * 2 : radius,
        width: radius,
        depth: radius,
        radius
    });

    particle.material = material.clone();
    particle.material.map = WHS.TextureModule.load(`assets/spider.png`);

    particle.data = {
        distance: radiusMin + Math.random() * (radiusMax - radiusMin),
        angle: Math.random() * Math.PI * 2
    };

    // Set position & rotation.
    particle.position.x = Math.cos(particle.data.angle) * particle.data.distance;
    particle.position.z = Math.sin(particle.data.angle) * particle.data.distance;
    particle.position.y = -10 * Math.random() + 4;
    particle.status = {
        isHold: false,
        isLerping: false,
        isSleeping: false
    };
    particle.rotation.set(Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random());

    // Add to group
    particle.addTo(gizmos);
}




