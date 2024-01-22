import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { beforeEnter } from './guard'

const Home = lazy(() => import('@/pages/Home'))
const Login = lazy(() => import('@/pages/Login'))
const routes = [
  {
    path: '/login',
    element: <Login />,
    loader: beforeEnter,
    errorElement: <></>,
  },
  {
    path: '/',
    element: <Home />,
    loader: beforeEnter,
    errorElement: <></>,
  },

]

export default createBrowserRouter(routes)