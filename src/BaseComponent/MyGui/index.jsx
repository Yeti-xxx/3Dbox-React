import { memo, useEffect } from 'react'
import { GUI } from 'dat.gui'
import { createControlsConfig } from '../../utils/controlsConfig'
import { useDispatch } from 'react-redux'
import { changeToMeshGlobaArray } from '../../store/modules/cube'
const index = memo((props) => {
    const gui = new GUI()
    const { meshRef } = props
    const dispatch = useDispatch()
    // 创建控件配置
    const controlsConfig = createControlsConfig(meshRef)

    useEffect(() => {
        // 为控制器添加onChange方法
        controlsConfig.forEach((control) => {
            const folder = gui.addFolder(control.folder);
            control.props.forEach((prop) => {
                // 向回调函数传value，另一个则是被触发的对象
                // 如position 是vector3对象 旋转的欧拉对象
                folder.add(control.target, prop, control.min, control.max).onChange(() => handleControlChange(control.folder,control.target));
            });
        });

        document.body.appendChild(gui.domElement);

        return () => {
            // 移除gui的Dom
            document.body.removeChild(gui.domElement);
        };
    }, [controlsConfig]);

    //控件的change事件，一旦触发则向store派发最新的值 
    const handleControlChange = (folder,targetObj) => {
        // store操作....
        // dispatch(changeToMeshGlobaArray({folder,targetObj}))
    };

    return null
})

export default index
