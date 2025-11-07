import { Link, useLoaderData } from 'react-router'

function MovieDetails() {
  const movie = useLoaderData()
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl max-w-3xl w-full overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
          </div>
          <div className="md:w-2/3 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-gray-800">{movie.title}</h1>
              <p className="text-gray-600 mb-1"><span className="font-semibold">Year:</span> {movie.year}</p>
              <p className="text-gray-600 mb-1"><span className="font-semibold">Genre:</span> {movie.genre}</p>
              <p className="text-gray-600 mb-1"><span className="font-semibold">Director:</span> {movie.director}</p>
              <p className="text-gray-600 mb-4"><span className="font-semibold">Rating:</span> ⭐ {movie.rating} / 10</p>
              <p className="text-gray-700">{movie.review}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to={`/update-movie/${movie._id}`} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">Update</Link>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
