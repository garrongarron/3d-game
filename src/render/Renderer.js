import camera from './Camera.js'
import scene from './Scene.js'
import machine from './Machine.js'

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('c'), antialias: true });
renderer.setClearColor(0x29487d);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


machine.addCallback(() => {
    renderer.render(scene, camera);
})
machine.run()