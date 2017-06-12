// export class Gizmo extends WHS.MeshComponent {
//     build() {
//         return new THREE.Mesh(
//             new THREE.IcosahedronGeometry(3, 5),
//             new THREE.MeshBasicMaterial({color: 0xffffff})
//         )
//     }
//
//     randomize() { // Additional function
//         this.position.set(Math.random() * 10, Math.random() * 10, Math.random() * 10);
//     }
// }


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

const asteroids = new WHS.Group();
asteroids.addTo(space);
