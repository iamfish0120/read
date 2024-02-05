import { lazy } from 'react'
import { createBrowserRouter,Navigate  } from 'react-router-dom'
import { beforeEnter } from './guard'

const Home = lazy(() => import('@/pages/Home'))
const Login = lazy(() => import('@/pages/Login'))
const Layout = lazy(() => import('@/pages/Layout'))
const routes = [
  {
    path: '/login',
    element: <Login />,
    loader: beforeEnter,
    errorElement: <></>,
  },
  {
    path: '/',
    element: <Layout />,
    loader: beforeEnter,
    errorElement: <></>,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
      },
      {
        path: '/Home',
        element: <Home />,
        loader: beforeEnter,
      }
    ]
  },

]

export default createBrowserRouter(routes)