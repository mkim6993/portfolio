import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(0);

renderer.render(scene, camera);

/**
 * Shapes
 */

const geometry = new THREE.TorusGeometry(10, 8, 36, 25);
const material = new THREE.MeshStandardMaterial({
  color: "teal",
  wireframe: true,
});

// const material2 = new THREE.MeshBasicMaterial({
//   color: 0xff6347,
//   wireframe: true,
// });

const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

/**
 * Lighting
 */

const pointLight = new THREE.PointLight("teal", 1000);
pointLight.position.set(5, 5, -25);

const ambientLight = new THREE.AmbientLight("teal", 0.9);
scene.add(pointLight, ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper);

/**
 * mouse controls
 */

// const controls = new OrbitControls(camera, renderer.domElement);

/**
 * adding more shapes using function
 */
// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
//   const star = new THREE.Mesh(geometry, material);

//   const [x, y, z] = Array(3)
//     .fill()
//     .map(() => THREE.MathUtils.randFloatSpread(100));
//   star.position.set(x, y, z);
//   scene.add(star);
// }

// Array(200).fill().forEach(addStar);

/**
 * background images
 */
const spaceTexture = new THREE.TextureLoader().load("gray.png");
scene.background = spaceTexture;

/**
 * texture mapping
 */
// const minTexture = new THREE.TextureLoader().load("headshot.jpg");
// const bumpyTexture = new THREE.TextureLoader().load("bumpy.jpg");

// const min = new THREE.Mesh(
//   new THREE.BoxGeometry(3, 3, 3),
//   new THREE.MeshBasicMaterial({ map: minTexture })
// );

// const moon = new THREE.Mesh(
//   new THREE.SphereGeometry(3, 32, 32),
//   new THREE.MeshStandardMaterial({
//     map: minTexture,
//     normalMap: bumpyTexture,
//   })
// );

// scene.add(min, moon);

// moon.position.z = 30;
// moon.position.setX(-10);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  // moon.rotation.x += 0.05;
  // moon.rotation.y += 0.075;
  // moon.rotation.z += 0.05;

  // min.rotation.y += 0.01;
  // min.rotation.z += 0.01;

  // camera.position.z = t * -0.01;
  // camera.position.x = t * -0.0002;
  // camera.rotation.y = t * -0.05;
}

// document.body.onscroll = moveCamera;

/**
 * animate shape
 */
function animate() {
  requestAnimationFrame(animate);
  // torus.rotation.x += 0.01;
  // torus.rotation.y += 0.01;
  torus.rotation.z += -0.001;
  // controls.update();
  renderer.render(scene, camera);
}

animate();

