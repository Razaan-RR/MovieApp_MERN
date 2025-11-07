import { createBrowserRouter } from 'react-router'
import App from '../App'
import Home from '../Pages/Home'
import Movies from '../Pages/Movies'
import MainLayout from '../Layouts/MainLayout'
import AddMovie from '../Pages/AddMovie'
import MovieDetails from '../Pages/MovieDetails'
import ErrorPage from '../Pages/ErrorPage'
import UpdateMovie from '../Pages/UpdateMovie'

let router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/movies',
        element: <Movies></Movies>,
        loader: () => fetch('http://localhost:3000/models'),
      },
      {
        path: '/add-movies',
        element: <AddMovie></AddMovie>,
      },
      {
        path: '/movie-details/:id',
        element: <MovieDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/models/${params.id}`),
      },
      {
        path: '/update-movie/:id',
        element: <UpdateMovie></UpdateMovie>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/models/${params.id}`),
      },
    ],
  },
])

export default router
