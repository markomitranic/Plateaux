// three var
var camera, scene, light, renderer, canvas, controls;
var meshs = [];
var grounds = [];

var antialias = true;

var gizmos = {};
var mats = {};

//oimo var
var world = null;
var bodys = [];

var fps = [0,0,0,0];
var ToRad = 0.0174532925199432957;
var type = 1;

init();
loop();

function init() {

    var n = navigator.userAgent;

    canvas = document.getElementById("canvas");

    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 5000 );
    camera.position.set( 0, 160, 400 );

    controls = new THREE.OrbitControls( camera, canvas );
    controls.target.set(0, 20, 0);
    controls.maxPolarAngle = Math.PI/2;
    controls.minDistance = 1;
    controls.maxDistance = 1000;
    controls.update();

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({ canvas:canvas, precision: "mediump", antialias:antialias });
    renderer.setSize( window.innerWidth, window.innerHeight );

    scene.add( new THREE.AmbientLight( 0x3D4143 ) );
    light = new THREE.DirectionalLight( 0xffffff , 1.4);
    light.position.set( 300, 1000, 500 );
    light.target.position.set( 0, 0, 0 );
    light.castShadow = true;
    var d = 300;
    light.shadow.camera = new THREE.OrthographicCamera( -d, d, d, -d,  500, 1600 );
    light.shadow.bias = 0.0001;
    light.shadow.mapSize.width = light.shadow.mapSize.height = 1024;
    scene.add( light );

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;//THREE.BasicShadowMap;

    // background
    var buffgeoBack = new THREE.BufferGeometry();
    buffgeoBack.fromGeometry( new THREE.IcosahedronGeometry(3000,2) );
    var back = new THREE.Mesh( buffgeoBack, new THREE.MeshBasicMaterial( { map:gradTexture([[0.75,0.6,0.4,0.25], ['#000682','#0006a8','#0006cb', '#0006ef']]), side:THREE.BackSide, depthWrite: false, fog:false }  ));
    scene.add( back );

    window.addEventListener( 'resize', onWindowResize, false );

    initOimoPhysics();

    var dragControls = new THREE.DragControls( meshs, camera, renderer.domElement );
    dragControls.addEventListener('dragstart', dragStart);
    dragControls.addEventListener('dragend', dragEnd);

}

function loop() {
    updateOimoPhysics();
    renderer.render( scene, camera );
    requestAnimationFrame( loop );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function initOimoPhysics(){

    world = new OIMO.World({
        worldscale:100,
        gravity: [0,-9.8,0]
    } );
    populate(2);
}

function updateOimoPhysics() {
    if(world==null) return;

    world.step();

    var x, y, z, mesh, body, i = bodys.length;

    while (i--){
        body = bodys[i];
        mesh = meshs[i];

        if(!body.sleeping){

            mesh.position.copy(body.getPosition());
            mesh.quaternion.copy(body.getQuaternion());
            
            if(mesh.material.name === 'sbox') mesh.material = mats.box;
            if(mesh.material.name === 'ssph') mesh.material = mats.sph;
            if(mesh.material.name === 'scyl') mesh.material = mats.cyl;

            if(mesh.position.y<-100){
                x = -100 + Math.random()*200;
                z = -100 + Math.random()*200;
                y = 100 + Math.random()*1000;
                body.resetPosition(x,y,z);
            }
        } else {
            if(mesh.material.name === 'box') mesh.material = mats.sbox;
            if(mesh.material.name === 'sph') mesh.material = mats.ssph;
            if(mesh.material.name === 'cyl') mesh.material = mats.scyl;
        }
    }
}
