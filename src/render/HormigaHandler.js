import KeyListener from './KeyListener.js';
import machine from './Machine.js'

let key = new KeyListener()
key.start()

// setTimeout(() => {
//     key.stop()
//     console.log('stop');   
// }, 1000*5);

let speed = 5

let hormigaHandler =(mesh)=>{
    machine.addCallback(()=>{
        if(key.isPressed(38)){
            mesh.position.x += Math.sin(mesh.rotation.y) * speed
            mesh.position.z += Math.cos(mesh.rotation.y) * speed
        }
        if(key.isPressed(40)){
            mesh.position.x -= Math.sin(mesh.rotation.y) * speed
            mesh.position.z -= Math.cos(mesh.rotation.y) * speed
        }
    
        if(key.isPressed(37)){
            mesh.rotation.y +=1 * Math.PI /180 
        }
        if(key.isPressed(39)){
            mesh.rotation.y -=1 * Math.PI /180 
        }
    })
}
export default hormigaHandler