let threeJsId = $('threeJsId');
let scene, camera, renderer , cube ; 

$(document).ready(function(){
    let image = $('img')[0];
    console.log(image.src)
});

function init(){
     scene = new THREE.Scene();
     camera = new THREE.PerspectiveCamera(
        55, 
        window.innerWidth/window.innerHeight ,
        45,
        30000
    );
    camera.position.set(-900, -200, -900);
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // let geometry  = new THREE.PlaneGeometry(5,20,32);
    // // let material = new THREE.MeshBasicMaterial({ color: 0x0000ff  });
    // let texture = new THREE.TextureLoader().load('uploads/floor_plan/sonnie-hiles.jpg');
    // let material = new THREE.MeshBasicMaterial({ map: texture });
    // cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    // camera.position.z = 5 ;
    let controls = new THREE.OrbitControls(camera);
    controls.addEventListener('change', renderer);
    controls.minDistance = 500 ; 
    controls.maxDistance = 1500 ;

    let materialArray = [];
    let texture_ft = new THREE.TextureLoader().load('uploads/pics_home/front.jpeg');
    let texture_bk = new THREE.TextureLoader().load('uploads/pics_home/back.jpeg');
    let texture_dn = new THREE.TextureLoader().load('uploads/pics_home/top.jpeg');
    let texture_up = new THREE.TextureLoader().load('uploads/floor_plan/sonnie-hiles.jpg');
    let texture_rt = new THREE.TextureLoader().load('uploads/pics_home/right.jpeg');
    let texture_lf = new THREE.TextureLoader().load('uploads/pics_home/left.jpeg');

    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

    for(let i=0;i<6;i++){
        materialArray[i].side = THREE.BackSide ;
    }

    let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    let skybox  = new THREE.Mesh(skyboxGeo, materialArray);
    scene.add(skybox);
    // animate();
}

function animate(){
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
    // cube.rotation.x += 1 ;
    // cube.rotation.y += 0.01 ;
}

function onWindowResize(){
    camera.aspect = window.innerWidth/window.innerHeight; 
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();



