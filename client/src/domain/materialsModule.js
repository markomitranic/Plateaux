const mat = [
    new THREE.MeshPhongMaterial({color: 0x8fc999, shading: THREE.FlatShading}),
    new THREE.MeshPhongMaterial({color: 0x5fc4d0, shading: THREE.FlatShading}),
    new THREE.MeshPhongMaterial({color: 0xee5624, shading: THREE.FlatShading}),
    new THREE.MeshPhongMaterial({color: 0xfaff70, shading: THREE.FlatShading})
];

const gizmoMat = {
    low: new THREE.MeshPhongMaterial({color: 0x274690, shading: THREE.FlatShading}),
    mid: new THREE.MeshPhongMaterial({color: 0xD6FFB7, shading: THREE.FlatShading}),
    high: new THREE.MeshPhongMaterial({color: 0xEC0B43, shading: THREE.FlatShading})
};

const gizmoTexture = {
    gizmo_1: WHS.TextureModule.load('assets/icons/podcast.png'),
    gizmo_2: WHS.TextureModule.load('assets/icons/qr-code.png'),
    gizmo_3: WHS.TextureModule.load('assets/icons/window.png'),
    gizmo_4: WHS.TextureModule.load('assets/icons/cog.png'),
    gizmo_5: WHS.TextureModule.load('assets/icons/microchip.png'),
    gizmo_6: WHS.TextureModule.load('assets/icons/deaf.png'),
    gizmo_7: WHS.TextureModule.load('assets/icons/moon.png'),
    gizmo_8: WHS.TextureModule.load('assets/icons/fire.png'),
    gizmo_9: WHS.TextureModule.load('assets/icons/gravity.png'),
    gizmo_10: WHS.TextureModule.load('assets/icons/spider.png'),
    gizmo_11: WHS.TextureModule.load('assets/icons/fusion.png')
};

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

function getMaterial(materialType) {
    return gizmoMat[materialType];
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

function getTexture(textureName) {
    return gizmoTexture[textureName];
}