const gizmos = new WHS.Group();
gizmos.addTo(space);

function newGizmo (name, mesh, material, distance, angle, elevation, sleeping) {
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
        name: name,
        distance: distance,
        elevation: elevation,
        angle: angle,
        status: "",
        pickup: () => {
            particle.data.status = "isHold";
        },
        lerpToOrbit: () => {
            particle.data.status = "isLerping";

            particle.data.lerpFrom = particle.position;
            particle.data.lerpTo = new THREE.Vector3(
                Math.cos(particle.data.angle) * particle.data.distance,
                0,
                Math.sin(particle.data.angle) * particle.data.distance,
            );

            const animationLoop = new WHS.Loop((clock) => {
                let i = clock.getElapsedTime() / 5;
                particle.position = particle.data.lerpFrom.lerp(particle.data.lerpTo, i);
                if (clock.getElapsedTime() > 1) {
                    animationLoop.stop(world);
                    particle.data.status = '';
                }
            });
            animationLoop.start(world);
        },
        putToSleep: () => {
            particle.data.status = "isSleeping";
            particle.position.copy(new THREE.Vector3(0, 0, 0));
            particle.scale = {x: 0.0001, y: 0.0001, z: 0.0001};

            const event = new CustomEvent('gizmoSleep', { 'detail': particle.data });
            document.dispatchEvent(event);
        },
        wakeUp: () => {
            particle.scale = {x: 1, y: 1, z: 1};
            particle.data.lerpToOrbit();

            const event = new CustomEvent('gizmoWake', { 'detail': particle.data });
            document.dispatchEvent(event);
        }
    };

    // Set position & rotation.
    particle.position.x = Math.cos(particle.data.angle) * particle.data.distance;
    particle.position.z = Math.sin(particle.data.angle) * particle.data.distance;
    particle.position.y = elevation;
    particle.rotation.set(Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random());
    particle.addTo(gizmos);

    const animation = new WHS.Loop(() => {
        switch (particle.data.status) {
            case "isHold":
                particle.position.copy(mouse.project());
                break;
            case "isLerping":
                particle.rotation.x += Math.PI / 60;
                particle.rotation.y += Math.PI / 60;
                break;
            case "isSleeping":
                break;
            default:
                particle.data.angle += 0.005 * particle.data.distance / radiusMax;
                particle.position.x = Math.cos(particle.data.angle) * particle.data.distance;
                particle.position.z = Math.sin(particle.data.angle) * particle.data.distance;
                particle.rotation.x += Math.PI / 120;
                particle.rotation.y += Math.PI / 120;
        }
    });
    world.addLoop(animation);
    animation.start();

    if (sleeping) {
        particle.data.putToSleep();
    } else {
        particle.data.status = "isSleeping";
        particle.position.copy(new THREE.Vector3(0, 0, 0));
        particle.scale = {x: 0.0001, y: 0.0001, z: 0.0001};
        particle.data.wakeUp();
    }

    mouse.track(particle);

    particle.on('mousedown', () => {
        particle.data.pickup();
    });

    particle.on('mouseup', () => {
        if (planet.isHover) {
            particle.data.putToSleep();
        } else {
            particle.data.lerpToOrbit();
        }
    });

}

function findGizmoKey(name) {
    let gizmoKey = null;
    gizmos.children.forEach((gizmo, key) => {
        if (gizmo.data.name === name) {
            gizmoKey = key;
        }
    });

    return gizmoKey;

}






