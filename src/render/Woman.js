import loader from './Loader.js'
import hormigaHandler from './HormigaHandler.js'
import Animator from './Animator.js';

let getWoman = (scene) => {
    loader.load('woman3.gltf', function (gltf) {
        scene.add(gltf.scene);
        gltf.scene.position.set(-20, 0, -150)
        gltf.scene.scale.set(20, 20, 20)

        // let animatior = new Animator(gltf)
        // animatior.action(1)       

        hormigaHandler(gltf.scene)
    })
}

export default getWoman