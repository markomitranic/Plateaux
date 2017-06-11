function dragStart ( event ) {
    controls.enabled = false;


    meshs.forEach(function(mesh, i) {
        if (mesh.uuid === event.object.uuid) {
            var body = bodys[i];

            meshPositionForOimo = {
                x:mesh.position.x * 0.01,
                y:mesh.position.y * 0.01,
                z:mesh.position.z * 0.01
            }
            body.position.copy(meshPositionForOimo);
            body.position.copy(meshPositionForOimo);
        }
    });

}

function dragEnd ( event ) { controls.enabled = true;
    meshs.forEach(function(mesh, i) {
        if (mesh.uuid === event.object.uuid) {
            var body = bodys[i];

            meshPositionForOimo = {
                x:mesh.position.x * 0.01,
                y:mesh.position.y * 0.01,
                z:mesh.position.z * 0.01
            }
            body.position.copy(meshPositionForOimo);
            body.position.copy(meshPositionForOimo);
        }
    });
}