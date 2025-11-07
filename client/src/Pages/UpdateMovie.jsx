import { useLoaderData } from 'react-router'

function UpdateMovie() {
  const movie = useLoaderData()
  console.log(movie)
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Update Movie Details
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Movie Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={movie.title}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Year
              </label>
              <input
                type="number"
                name="year"
                defaultValue={movie.year}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Rating
              </label>
              <input
                type="number"
                name="rating"
                defaultValue={movie.rating}
                step="0.1"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Genre
            </label>
            <input
              type="text"
              name="genre"
              defaultValue={movie.genre}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Director
            </label>
            <input
              type="text"
              name="director"
              defaultValue={movie.director}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Review
            </label>
            <textarea
              name="review"
              rows="4"
              defaultValue={movie.review}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Poster URL
            </label>
            <input
              type="text"
              name="poster"
              defaultValue={movie.poster}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md shadow-sm transition duration-200"
            >
              Update Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateMovie
