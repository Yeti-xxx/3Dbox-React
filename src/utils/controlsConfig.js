export
    // 定义普通立方体控件配置的函数
    const createControlsConfig = (ref) => {
        console.log(ref);
        return [
            { folder: 'Rotation', target: ref.rotation, props: ['x', 'y', 'z'], min: 0, max: Math.PI * 2 },
            { folder: 'Position', target: ref.position, props: ['x', 'y', 'z'], min: 0, max: 100 },
            { folder: 'Scale', target: ref.scale, props: ['x', 'y', 'z'], min: 0, max: 20 },
            // { folder: 'Material', target: ref.material.color, props: ['r', 'g', 'b'], min: 0, max: 1 },
        ];
    }
// export 
//     const createModelControlsConfig = (ref)=>{
//         return [
//             { folder: 'Rotation', target: ref.rotation, props: ['x', 'y', 'z'], min: 0, max: Math.PI * 2 },
//             { folder: 'Position', target: ref.position, props: ['x', 'y', 'z'], min: 0, max: 100 },
//             { folder: 'Scale', target: ref.scale, props: ['x', 'y', 'z'], min: 0, max: 20 },
//         ];
//     }