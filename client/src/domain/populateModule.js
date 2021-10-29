// Start rendering.
world.start();

function populateWorld() {
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