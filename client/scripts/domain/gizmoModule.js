const gizmos = new WHS.Group();
gizmos.addTo(space);

function newGizmo (name, mesh, material, distance, angle, elevation, awake, position) {
    const radiusMin = 200, // Min radius of the asteroid belt.
        radiusMax = 220, // Max radius of the asteroid belt.
        particleMinRadius = 8, // Min of asteroid radius.
        particleMaxRadius = 20; // Max of asteroid radius.

    const particle = getMesh(mesh).clone();
    const radius = particleMinRadius + Math.random() * (particleMaxRadius - particleMinRadius);

    particle.g_({
        radiusBottom: radius,
        radiusTop: 0,
        height: particle instanceof WHS.Cylinder ? radius * 2 : radius,
        width: radius,
        depth: radius,
        radius
    });

    particle.material = getMaterial(material).clone();
    particle.material.map = WHS.TextureModule.load(`assets/spider.png`);

    particle.data = {
        name: name,
        mesh: mesh,
        material: material,
        distance: distance,
        angle: angle,
        elevation: elevation,
        status: "",
        position: new THREE.Vector3(),
        init: (awake) => {
            if (awake) {
                particle.data.status = "isSleeping";
                particle.position.copy(new THREE.Vector3(0, 0, 0));
                particle.scale = {x: 1, y: 1, z: 1};
                particle.data.status = "isLerping";
                particle.data.lerpFrom = particle.position;

                if (position) {
                    particle.data.lerpTo = new THREE.Vector3(position.x, position.y, position.z);
                } else {
                    particle.data.lerpTo = new THREE.Vector3(
                        Math.cos(particle.data.angle) * particle.data.distance,
                        0,
                        Math.sin(particle.data.angle) * particle.data.distance,
                    );
                }

                const animationLoop = new WHS.Loop((clock) => {
                    let i = clock.getElapsedTime() / 5;
                    particle.position = particle.data.lerpFrom.lerp(particle.data.lerpTo, i);
                    if (clock.getElapsedTime() > 1) {
                        animationLoop.stop(world);
                        particle.data.status = '';
                    }
                });
                animationLoop.start(world);

                const event = new CustomEvent('gizmoWake', { 'detail': particle.data });
                document.dispatchEvent(event);
            } else {
                particle.data.status = "isSleeping";
                particle.position.copy(new THREE.Vector3(0, 0, 0));
                particle.scale = {x: 0.0001, y: 0.0001, z: 0.0001};

                const event = new CustomEvent('gizmoSleep', { 'detail': particle.data });
                document.dispatchEvent(event);
            }
        },
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
            socketEmit('gizmoLerp', particle.data);
        },
        putToSleep: () => {
            particle.data.status = "isSleeping";
            particle.position.copy(new THREE.Vector3(0, 0, 0));
            particle.scale = {x: 0.0001, y: 0.0001, z: 0.0001};

            const event = new CustomEvent('gizmoSleep', { 'detail': particle.data });
            document.dispatchEvent(event);
            socketEmit('gizmoSleep', particle.data);
        },
        wakeUp: () => {
            particle.scale = {x: 1, y: 1, z: 1};
            particle.data.lerpToOrbit();

            const event = new CustomEvent('gizmoWake', { 'detail': particle.data });
            document.dispatchEvent(event);
            socketEmit('gizmoWake', particle.data);
        },
        remotePickup: (data) => {
            particle.data.status = "isRemoteHold";
            particle.position.copy(data.position);
        },
        remoteLerpToOrbit: (data) => {
            particle.data.status = "isLerping";
            particle.data.lerpFrom = particle.position;
            particle.data.lerpTo = data.lerpTo;
            particle.data.angle = data.angle;
            particle.data.distance = data.distance;
            particle.data.elevation = data.elevation;

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
        remotePutToSleep: (data) => {
            particle.data.status = "isSleeping";
            particle.position.copy(new THREE.Vector3(0, 0, 0));
            particle.scale = {x: 0.0001, y: 0.0001, z: 0.0001};

            const event = new CustomEvent('gizmoSleep', { 'detail': particle.data });
            document.dispatchEvent(event);
        },
        remoteWakeUp: (data) => {
            particle.scale = {x: 1, y: 1, z: 1};

            const event = new CustomEvent('gizmoWake', { 'detail': particle.data });
            document.dispatchEvent(event);
        },
    };

    // Set position & rotation.
    particle.position.x = Math.cos(particle.data.angle) * particle.data.distance;
    particle.position.z = Math.sin(particle.data.angle) * particle.data.distance;
    particle.position.y = elevation;
    particle.rotation.set(Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random());
    particle.addTo(gizmos);
    particle.scale = {x: 0.0001, y: 0.0001, z: 0.0001};

    const animation = new WHS.Loop(() => {
        switch (particle.data.status) {
            case "isSleeping":
                break;
            case "isHold":
                particle.position.copy(mouse.project());
                particle.data.position = particle.position;
                socketEmit('gizmoHold', particle.data);
                break;
            case "isLerping":
                particle.rotation.x += Math.PI / 60;
                particle.rotation.y += Math.PI / 60;
                break;
            case "isRemoteHold":
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
    particle.data.init(awake);

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

function sendWorldState(message) {
    const worldState = {
        status: "worldState",
        sendTo: message.id,
        gizmoArray: []
    };

    gizmos.children.forEach((gizmo) => {
        const gizmoData = {
            name: gizmo.data.name,
            mesh: gizmo.data.mesh,
            material: gizmo.data.material,
            distance: gizmo.data.distance,
            angle: gizmo.data.angle,
            elevation: gizmo.data.elevation,
            awake: (gizmo.data.status !== "isSleeping"),
            position: gizmo.position
        };

        worldState.gizmoArray.push(gizmoData);
    });

    socketEmit('worldState', worldState);
}
