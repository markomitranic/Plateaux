//
//
// // Animating rotating shapes around planet.
// const animation = new WHS.Loop(() => {
//     for (let i = 0, max = particles.length; i < max; i++) {
//         const particle = particles[i];
//
//         if (particle.status.isHold) {
//             particle.position.copy(mouse.project());
//         } else if (particle.status.isLerping) {
//             particle.rotation.x += Math.PI / 60;
//             particle.rotation.y += Math.PI / 60;
//         } else if (particle.status.isSleeping) {
//
//         } else {
//             particle.data.angle += 0.005 * particle.data.distance / radiusMax;
//             particle.position.x = Math.cos(particle.data.angle) * particle.data.distance;
//             particle.position.z = Math.sin(particle.data.angle) * particle.data.distance;
//             particle.rotation.x += Math.PI / 60;
//             particle.rotation.y += Math.PI / 60;
//         }
//     }
// });
// world.addLoop(animation);
// animation.start();
//
//
//
// const animations = {};
//
// animations.planet = new WHS.Loop(() => {
//     planet.rotation.y += 0.005;
// });
// world.addLoop(animations.planet);
// animations.planet.start();



// Start rendering.
world.start();