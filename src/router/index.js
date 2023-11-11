import React from 'react'
import { Navigate } from 'react-router-dom'
const Work = React.lazy(() => import('../views/work/index'))
const Welcome = React.lazy(() => import('../views/welcome/index.jsx'))
const Fps = React.lazy(()=>import('../views/exeamples/FPS/index.jsx'))

const routes = [
    {
        path: '/',
        element: <Navigate to={"/welcome"} />
    },
    {
        path: '/welcome',
        element: <Welcome />
    },
    {
        path: '/work',
        element: <Work />
    },
    {
        path: '/exeamples/FPS',
        element: <Fps />
    }
]

export default routes