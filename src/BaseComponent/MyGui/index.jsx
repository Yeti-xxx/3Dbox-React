import React, { memo, useEffect } from 'react'
import { GUI } from 'dat.gui'
import { createControlsConfig } from '../../utils/controlsConfig'
const index = memo((props) => {
    const gui = new GUI()
    const { meshRef } = props

    // 创建控件配置
    const controlsConfig = createControlsConfig(meshRef)

    useEffect(() => {
        // 为控制器添加onChange方法
        controlsConfig.forEach((control) => {
            const folder = gui.addFolder(control.folder);
            control.props.forEach((prop) => {
                folder.add(control.target, prop, control.min, control.max).onChange(() => handleControlChange());
            });
        });

        document.body.appendChild(gui.domElement);

        return () => {
            // 移除gui的Dom
            document.body.removeChild(gui.domElement);
        };
    }, [gui]);

    //控件的change事件，一旦触发则向store派发最新的值 
    const handleControlChange = () => {
        // store操作....
    };

    return null
})

export default index
