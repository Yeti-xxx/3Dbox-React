export
    // 定义控件配置的函数
    const createControlsConfig = (ref) => {
        return [
            { folder: 'Rotation', target: ref.current.rotation, props: ['x', 'y', 'z'], min: 0, max: Math.PI * 2 },
            { folder: 'Position', target: ref.current.position, props: ['x', 'y', 'z'], min: 0, max: 100 },
            { folder: 'Scale', target: ref.current.scale, props: ['x', 'y', 'z'], min: 0, max: 20 },
            { folder: 'Material', target: ref.current.material.color, props: ['r', 'g', 'b'], min: 0, max: 1 },
        ];
    }