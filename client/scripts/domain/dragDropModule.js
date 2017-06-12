for (let i = 0, max = particles.length; i < max; i++) {
    const particle = particles[i];
    mouse.track(particle);

    particle.on('mousedown', () => {
        particle.status.isHold = true;
    });

    particle.on('mouseup', () => {
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
    });
}