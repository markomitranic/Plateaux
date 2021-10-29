const planet = new WHS.Tetrahedron({
    geometry: {
        radius: planetSize,
        detail: 2
    },

    material: new THREE.MeshStandardMaterial({
        color: 0xee5624,
        shading: THREE.FlatShading,
        roughness: 0.9,
        emissive: 0x270000
    })
});

planet.isHover = false;
planet.addTo(space);

mouse.track(planet);
planet.on('mouseover', () => {
    planet.isHover = true;
});
planet.on('mouseout', () => {
    planet.isHover = false;
});