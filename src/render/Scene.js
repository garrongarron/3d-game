import { light1, light2, light3 } from './Lights.js'
import floor from './Floor.js'
import getTree from './Tree.js';
import getWoman from './Woman.js';

const scene = new THREE.Scene();

scene.add(light1);
scene.add(light2);
scene.add(light3);
scene.add(floor);



getTree(scene)
getWoman(scene)



export default scene