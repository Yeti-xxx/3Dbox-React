import { useEffect, useState } from "react"

export const usePerson = () => {

    // 按键key转表内表示的状态
    const moveFieldByKey = (key) => {
        let res = ''
        if (key==='KeyW') {
            res = 'forward'
        }else if (key==='KeyS') {
            res = 'backward'
        }else if (key==='KeyA') {
            res = 'left'
        }else if (key==='KeyD') {
            res = 'right'
        }else if (key==='Space') {
            res = 'jump'
        }
        return res
    }

    // 
    const [movement, setMovement] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
        jump: false

    })

    const setMovementStatus = (code, stateus) => {
        setMovement((m) => {
            return { ...m, [code]: stateus }
        })
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            setMovementStatus(moveFieldByKey(e.code), true)
        }

        const handleKeyUp = (e) => {
            setMovementStatus(moveFieldByKey(e.code), false)
        }

        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [])

    return movement
}