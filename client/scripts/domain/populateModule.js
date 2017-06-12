
for (let i = 0; i < particleCount; i++) {
    const particle = [s1, s2, s3, s4][Math.ceil(Math.random() * 3)].clone(),
        radius = particleMinRadius + Math.random() * (particleMaxRadius - particleMinRadius);

    particle.g_({
        radiusBottom: radius,
        radiusTop: 0,
        height: particle instanceof WHS.Cylinder ? radius * 2 : radius,
        width: radius,
        depth: radius,
        radius
    });

    particle.material = mat[Math.floor(4 * Math.random())]; // Set custom THREE.Material to mesh.
    particle.material.map = WHS.TextureModule.load(`assets/spider.png`);

    // Particle data.
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
        isLerping: false
    };

    particle.rotation.set(Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random());

    particle.addTo(asteroids);
}
const particles = asteroids.children;



// Animating rotating shapes around planet.
const animation = new WHS.Loop(() => {
    for (let i = 0, max = particles.length; i < max; i++) {
        const particle = particles[i];

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
            particle.rotation.x += Math.PI / 60;
            particle.rotation.y += Math.PI / 60;
        }
    }
});
world.addLoop(animation);
animation.start();



const animations = {};

animations.planet = new WHS.Loop(() => {
    planet.rotation.y += 0.005;
});
world.addLoop(animations.planet);
animations.planet.start();



// Start rendering.
world.start();