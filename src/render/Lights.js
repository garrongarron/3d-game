//LIGHTS
const light1 = new THREE.AmbientLight(0xffffff, .5);
light1.position.set(0, 5, 100);
// light1.castShadow = true;

const light2 = new THREE.PointLight(0xffffff, .5);
light2.position.set(50, 150, 100);
// light2.castShadow = true;

const light3 = new THREE.PointLight(0xffffff, 2);
light3.position.set(0, 20, 30);

export { light1, light2, light3 }