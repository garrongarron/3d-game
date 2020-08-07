import machine from "./Machine.js";

const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, .1, 1000);
camera.position.set(0, 20, 0)
// camera.lookAt(mesh)

export default camera