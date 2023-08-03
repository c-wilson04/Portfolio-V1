import './index.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
//Inital canvas resize for both canvas'
let canvas = document.querySelector('#bg');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
let canvas2 = document.querySelector('#secondcanvas');
    canvas2.style.width = '100%';
    canvas2.style.height = '100%';
//Canvas1 Three.js SetUp
const loader = new GLTFLoader();
let firstOBJ;
let secondOBJ;


const scene = new THREE.Scene()
canvas = document.querySelector('#bg')
let canvasHeight = document.querySelector('#bg').clientHeight
let canvasWidth = document.querySelector('#bg').clientWidth
const camera = new THREE.PerspectiveCamera(74, canvasWidth/canvasHeight,0.1,500);
const renderer= new THREE.WebGLRenderer({canvas, alpha: true})
scene.background = new THREE.Color('Black')
scene.add(camera)


loader.load( './3D/obj2/roomn.gltf', function ( gltf ) {
	scene.add( gltf.scene );
    secondOBJ= gltf.scene.children[0];
    secondOBJ.scale.set(1,1,1);
}, undefined, function ( error ) {
	console.error( error );
} );



renderer.setPixelRatio(canvasWidth/canvasHeight);
renderer.setSize(canvasWidth,canvasHeight);
camera.position.setZ(30);
camera.position.setX(0)
renderer.render(scene, camera)

const material = new THREE.MeshStandardMaterial({color: 0xFF6347})
const geometry = new THREE.TorusGeometry(15, 3, 16, 100)
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(15,5,5)

const ambientLight= new THREE.AmbientLight(0xffffff)
ambientLight.position.set(15,5,5)
scene.add(pointLight,ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)



function animate(){
    requestAnimationFrame(animate);
    mesh.rotation.y +=0.01;
    //firstOBJ.rotation.z += 0.01;

    renderer.render(scene,camera);
    
}
animate()

//camera resize 
window.addEventListener("resize", () => {
    canvasHeight = document.querySelector('.canvas-container1').clientHeight
    canvasWidth = document.querySelector('.canvas-container1').clientWidth
    console.log(canvasWidth)
    camera.aspect = canvasWidth/canvasHeight
    camera.updateProjectionMatrix
    renderer.setSize(canvasWidth, canvasHeight)
    console.log("width is " + window.innerWidth)
    if(window.innerWidth <= 414){
        console.log("active");
        secondOBJ.scale.set(1,1,1);
        mesh.scale.set(0.8,0.8,0.8);
        canvas2OBJ.scale.set(1,1,1);
    }
})

const loop = () => {
    renderer.render(scene, camera)
    window.requestAnimationFrame
}
loop()



//Canvas2 Three.js SetUp
let canvas2OBJ
const loader2 = new GLTFLoader();


const scene2 = new THREE.Scene()
canvas = document.querySelector('#secondcanvas')
let canvasHeight2 = document.querySelector('.canvas-container').clientHeight
let canvasWidth2 = document.querySelector('.canvas-container').clientWidth
const camera2 = new THREE.PerspectiveCamera(74, canvasWidth2/canvasHeight2,0.1,500);
const renderer2= new THREE.WebGLRenderer({canvas, alpha: true})
scene2.background = new THREE.Color('Black')
scene2.add(camera2)






loader2.load( './3D/WireFrame/WireFrameFace_Omar.gltf', function ( gltf ) {
	scene2.add( gltf.scene );
    canvas2OBJ= gltf.scene.children[0];
    canvas2OBJ.scale.set(2,2,2);
}, undefined, function ( error ) {
	console.error( error );
} );


renderer2.setPixelRatio(canvasWidth2/canvasHeight2);
renderer2.setSize(canvasWidth2,canvasHeight2);
camera2.position.setZ(30);
camera2.position.setX(0)
renderer2.render(scene2, camera2)

const pointLight2 = new THREE.PointLight(0xffffff)
pointLight2.position.set(15,5,5)

const ambientLight2= new THREE.AmbientLight(0xffffff)
ambientLight2.position.set(15,5,5)
scene2.add(pointLight2,ambientLight2)

const lightHelper2 = new THREE.PointLightHelper(pointLight)
scene2.add(lightHelper2)



function animate2(){
    requestAnimationFrame(animate2);
    canvas2OBJ.rotation.z -=0.01;
    //firstOBJ.rotation.z += 0.01;

    renderer2.render(scene2,camera2);
    
}
animate2();

//camera resize 
window.addEventListener("resize", () => {
    location.replace
    console.log("reloaded")
    canvas = document.querySelector('#bg');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas2 = document.querySelector('#secondcanvas');
    canvas2.style.width = '100%';
    canvas2.style.height = '100%';

    canvasHeight2 = document.querySelector('.canvas-container').clientHeight
    canvasWidth2= document.querySelector('.canvas-container').clientWidth
    console.log(canvasWidth2+"canvas2")
    camera2.aspect = canvasWidth2/canvasHeight2
    camera2.updateProjectionMatrix
    renderer2.setSize(canvasWidth2, canvasHeight2)
})

const loop2 = () => {
    renderer2.render(scene2, camera2)
    window.requestAnimationFrame
}
loop2();

// window.onresize = function () {
//     canvas = document.querySelector('#bg');
//     canvas.style.width = '100%';
//     canvas.style.height = '100%';
//     canvas2 = document.querySelector('#secondcanvas');
//     canvas2.style.width = '100%';
//     canvas2.style.height = '100%';
// }