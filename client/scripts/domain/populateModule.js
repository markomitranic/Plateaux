
function distance() {
    return radiusMin + Math.random() * (radiusMax - radiusMin);
}
function angle() {
    return Math.random() * Math.PI * 2;
}
function elevation() {
    return -10 * Math.random() + 4;
}

newGizmo('gizmo_1', s1, mat[1], distance(), angle(), elevation());
newGizmo('gizmo_2', s2, mat[2], distance(), angle(), elevation());
newGizmo('gizmo_3', s3, mat[3], distance(), angle(), elevation());
// newGizmo('gizmo_4', s4, mat[0], distance(), angle(), elevation());
// newGizmo('gizmo_5', s3, mat[2], distance(), angle(), elevation());
// newGizmo('gizmo_6', s1, mat[2], distance(), angle(), elevation());
// newGizmo('gizmo_7', s2, mat[3], distance(), angle(), elevation());
// newGizmo('gizmo_8', s1, mat[2], distance(), angle(), elevation());
// newGizmo('gizmo_9', s3, mat[1], distance(), angle(), elevation());
// newGizmo('gizmo_10', s4, mat[0], distance(), angle(), elevation());
// newGizmo('gizmo_11', s4, mat[0], distance(), angle(), elevation());

// Start rendering.
world.start();