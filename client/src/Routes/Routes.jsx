import { createBrowserRouter } from 'react-router'
import App from '../App'
import Home from '../Pages/Home'
import Movies from '../Pages/Movies'
import MainLayout from '../Layouts/MainLayout'
import AddMovie from '../Pages/AddMovie'

let router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/movies',
        element: <Movies></Movies>,
        loader: ()=> fetch('http://localhost:3000/models')
      },
      {
        path: '/add-movies',
        element: <AddMovie></AddMovie>,
      },
    ],
  },
])

export default router
