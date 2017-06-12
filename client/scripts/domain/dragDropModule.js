for (let i = 0, max = particles.length; i < max; i++) {
    const particle = particles[i];
    mouse.track(particle);

    particle.on('mousedown', () => {
        pickupGizmo(particle);
    });

    particle.on('mouseup', () => {
        if (planet.isHover) {
            putGizmoToSleep(particle);
        } else {
            lerpGizmoToOrbit(particle);
        }
    });
}

function pickupGizmo (particle) {
    particle.status.isHold = true;
    particle.status.isSleeping = false;
    particle.status.isLerping = false;
}

function putGizmoToSleep(particle) {
    particle.status.isSleeping = true;
    particle.status.isHold = false;
}

function lerpGizmoToOrbit (particle) {
    particle.status.isSleeping = false;
    particle.status.isHold = false;
    particle.status.isLerping = true;

    particle.status.lerpFrom = particle.position;
    particle.status.lerpTo = new THREE.Vector3(
        Math.cos(particle.data.angle) * particle.data.distance,
        0,
        Math.sin(particle.data.angle) * particle.data.distance,
    );

    const animationLoop = new WHS.Loop((clock) => {
        let i = clock.getElapsedTime() / 5;
        particle.position = particle.status.lerpFrom.lerp(particle.status.lerpTo, i);
        if (clock.getElapsedTime() > 1) {
            animationLoop.stop(world);
            particle.status.isLerping = false;
        }
    });
    animationLoop.start(world);
}