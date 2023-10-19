export const MeshArray = [
    // 自带基础模型的数据信息
    {
        // 立方体
        Geometry: 'BoxGeometry',
        type: 'Geometry',
        name: '立方体',
        construc: ['width-宽度', 'height-高度', 'depth-深度'],
        imgSrc: '../../public/cuebImgSelection/BoxGeometry.jpg'
    },
    {
        // 胶体
        Geometry: 'CapsuleGeometry',
        type: 'Geometry',
        name: '胶体',
        construc: ['radius-胶囊半径', 'length-中间长度', 'depth-深度'],
        imgSrc: '../../public/cuebImgSelection/CapsuleGeometry.jpg'
    },
    {
        // 锥体
        Geometry: 'ConeGeometry',
        type: 'Geometry',
        name: '锥体',
        construc: ['radius-底部半径', 'height-高度'],
        imgSrc: '../../public/cuebImgSelection/ConeGeometry.jpg'
    },
    {
        // 柱体
        Geometry: 'CylinderGeometry',
        type: 'Geometry',
        name: '柱体',
        construc: ['radiusTop-顶部半径', 'radiusBottom-底部半径', 'height-高度', 'radialSegments-侧面分段数'],
        imgSrc: '../../public/cuebImgSelection/CylinderGeometry.jpg'
    },
    {
        // 圆环几何体
        Geometry: 'TorusGeometry',
        type: 'Geometry',
        name: '圆环几何体',
        construc: ['radius-环面半径', 'tube-管道半径', 'radialSegments-管道横截面分段数', 'tubularSegments-管道的分段数'],
        imgSrc: '../../public/cuebImgSelection/TorusGeometry.jpg'
    }
]

