import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  TorusGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const box = new TorusGeometry(10, 3, 8, 100);
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(box, material);
scene.add(cube);

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();