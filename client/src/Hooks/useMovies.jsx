import { useEffect, useState } from 'react'
import axios from 'axios'

const useMovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:3000/models')
      .then((response) => {
        setMovies(response.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { movies, loading, error }
}

export default useMovies
