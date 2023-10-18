import moto from '../assets/GLTF/moto.glb'
import hammer from '../assets/GLTF/hammer.glb'
import car from '../assets/GLTF/car.glb'
import chair from '../assets/GLTF/chair.glb'

export {moto,hammer,car,chair}
export const modelArr = [
    {
        source:moto,
        type:'GLTF',
        name:'摩托车'
    },
    {
        source:hammer,
        type:'GLTF',
        name:'工具锤'
    },
    {
        source:car,
        type:'GLTF',
        name:'保时捷911'
    },
    {
        source:chair,
        type:'GLTF',
        name:'椅子'
    },
]
