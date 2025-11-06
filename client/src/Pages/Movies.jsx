import { useLoaderData } from 'react-router'
import MovieCard from '../Components/MovieCard'

function Movies() {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className="p-6">
      <div className="text-center text-2xl font-bold">All Movies</div>
      <div className='grid grid-cols-3 gap-5'>
        {data.map((movie) => (
          <MovieCard key={movie._id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  )
}

export default Movies
