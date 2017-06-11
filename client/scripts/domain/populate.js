function populate(gizmoType) {

    // geometrys
    gizmos['sphere'] = new THREE.BufferGeometry().fromGeometry( new THREE.SphereGeometry(1,16,10));
    gizmos['box'] = new THREE.BufferGeometry().fromGeometry( new THREE.BoxGeometry(1,1,1));

    // materials
    var materialType = 'MeshPhongMaterial';
    mats['sph']    = new THREE[materialType]( {shininess: 10, map: basicTexture(0), name:'sph', emissive: 0x787878, specular: 0x434343 } );
    mats['box']    = new THREE[materialType]( {shininess: 10, map: basicTexture(2), name:'box', emissive: 0x787878, specular: 0x434343  } );
    mats['ssph']   = new THREE[materialType]( {shininess: 10, map: basicTexture(1), name:'ssph' } );
    mats['sbox']   = new THREE[materialType]( {shininess: 10, map: basicTexture(3), name:'sbox' } );
    mats['ground'] = new THREE[materialType]( {shininess: 10, color:0x3D4143 } );

    var max = 11;

    clearMesh();
    world.clear();
    createPlateau();
    createGizmos(max, gizmoType);

}

function createPlateau() {
    addStaticBox([40, 40, 390], [-180,20,0], [0,0,0]);
    addStaticBox([40, 40, 390], [180,20,0], [0,0,0]);
    addStaticBox([400, 80, 400], [0,-40,0], [0,0,0]);
}

function addStaticBox(size, position, rotation) {
    var mesh = new THREE.Mesh( gizmos.box, mats.ground );
    mesh.scale.set( size[0], size[1], size[2] );
    mesh.position.set( position[0], position[1], position[2] );
    mesh.rotation.set( rotation[0]*ToRad, rotation[1]*ToRad, rotation[2]*ToRad );
    scene.add( mesh );
    grounds.push(mesh);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    world.add({size:size, pos:position, world:world});
}

function createGizmos(max, gizmoType) {

    if(gizmoType===1) type = 1
    else if(gizmoType===2) type = 2;

    //add object
    var x, y, z, scale, h, d;
    var i = max;

    while (i--){
        t = type;
        x = -100 + Math.random()*200;
        z = -100 + Math.random()*200;
        y = 100 + Math.random()*1000;
        scale = 10 + Math.random()*10;
        h = 10 + Math.random()*10;
        d = 10 + Math.random()*10;

        if(t===1){
            bodys[i] = world.add({type:'sphere', size:[scale*0.5], pos:[x,y,z], move:true, world:world});
            meshs[i] = new THREE.Mesh( gizmos.sphere, mats.sph );
            meshs[i].scale.set( scale*0.5, scale*0.5, scale*0.5 );
        } else if(t===2){
            bodys[i] = world.add({type:'box', size:[scale,h,d], pos:[x,y,z], move:true, world:world});
            meshs[i] = new THREE.Mesh( gizmos.box, mats.box );
            meshs[i].scale.set( scale, h, d );
        }

        meshs[i].castShadow = true;
        meshs[i].receiveShadow = true;

        scene.add( meshs[i] );
    }
}

function clearMesh(){
    var i=meshs.length;
    while (i--) scene.remove(meshs[ i ]);
    i = grounds.length;
    while (i--) scene.remove(grounds[ i ]);
    grounds = [];
    meshs = [];
    bodys=[];
}
