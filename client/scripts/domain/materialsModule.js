const mat = [
    new THREE.MeshPhongMaterial({color: 0x8fc999, shading: THREE.FlatShading}),
    new THREE.MeshPhongMaterial({color: 0x5fc4d0, shading: THREE.FlatShading}),
    new THREE.MeshPhongMaterial({color: 0xee5624, shading: THREE.FlatShading}),
    new THREE.MeshPhongMaterial({color: 0xfaff70, shading: THREE.FlatShading})
];

const s1 = new WHS.Dodecahedron({
    geometry: {
        buffer: true,
        radius: 10
    },

    modules: [
        dynamicGeometry
    ],

    material: new THREE.MeshStandardMaterial({
        shading: THREE.FlatShading,
        emissive: 0x270000,
        roughness: 0.9
    })
});

const s2 = new WHS.Box({
    geometry: {
        buffer: true,
        width: 10,
        height: 10,
        depth: 10
    },

    modules: [
        dynamicGeometry
    ],

    material: new THREE.MeshStandardMaterial({
        shading: THREE.FlatShading,
        roughness: 0.9,
        emissive: 0x270000
    })
});

const s3 = new WHS.Cylinder({
    geometry: {
        buffer: true,
        radiusTop: 0,
        radiusBottom: 10,
        height: 10
    },

    modules: [
        dynamicGeometry
    ],

    material: new THREE.MeshStandardMaterial({
        shading: THREE.FlatShading,
        roughness: 0.9,
        emissive: 0x270000
    })
});

const s4 = new WHS.Sphere({
    geometry: {
        buffer: true,
        radius: 10
    },

    modules: [
        dynamicGeometry
    ],

    material: new THREE.MeshStandardMaterial({
        shading: THREE.FlatShading,
        roughness: 0.9,
        emissive: 0x270000
    })
});

function getMaterial(materialNumber) {
    return mat[materialNumber];
}

function getMesh(meshName) {
    switch (meshName) {
        case "dodecahedron":
            return s1;
            break;
        case "box":
            return s2;
            break;
        case "cylinder":
            return s3;
            break;
        case "sphere":
            return s4;
            break;
    }
}