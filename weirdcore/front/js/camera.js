import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;

const surveillance_window = document.getElementById('scene__surveillance');


renderer.setSize(surveillance_window.innerWidth, surveillance_window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(surveillance_window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

surveillance_window.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, surveillance_window.innerWidth / surveillance_window.innerHeight, 0.1, 1000);
camera.position.set(4, 5, 11)
camera.lookAt(0, 0, 0);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = true;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0;
controls.maxPolarAngle = 2;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);

controls.mouseButtons = { 
    LEFT: THREE.MOUSE.ROTATE, 
    MIDDLE: THREE.MOUSE.DOLLY, 
    RIGHT: THREE.MOUSE.PAN 
  };
controls.update();

const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x555555,
  side: THREE.DoubleSide
});

const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.castShadow = false;
groundMesh.receiveShadow = true;
// scene.add(groundMesh);

const spotLight = new THREE.SpotLight(0xffffff, 3000, 0, 5, 0, 2.3);
// spotLight.position.set(0, 25, 0);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;


// Définir la position de la lumière spot sur la même position que la caméra
spotLight.position.copy(new THREE.Vector3(4, 5, 11));

// Définir la direction de la lumière spot vers le point vers lequel la caméra regarde
spotLight.target.position.copy(new THREE.Vector3(0, 0, 0));

scene.add(spotLight);

const ambientLight = new THREE.AmbientLight(0x2979ff, 5);
scene.add(ambientLight);

const loader = new GLTFLoader().setPath('../ressources/models/');
loader.load('camera3d2.glb', (gltf) => {
    const mesh = gltf.scene;

    mesh.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });
    mesh.position.set(-1, 1.05, -3);
    mesh.rotateY(200);
    scene.add(mesh);
  });
  
  scene.background = new THREE.Color(0x77B5FE );

// Fonction pour mettre à jour la taille du rendu en fonction de la taille du div cible
function updateRendererSize() {
    const rect = surveillance_window.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
}

// Appeler la fonction pour la première fois pour initialiser la taille du rendu
updateRendererSize();

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
  
// Mettre à jour la taille du rendu lorsque la taille de la fenêtre change
window.addEventListener('resize', updateRendererSize);

animate();