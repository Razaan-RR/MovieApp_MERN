function AddMovie() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      title: e.target.title.value,
      year: Number(e.target.year.value),
      genre: e.target.genre.value,
      director: e.target.director.value,
      review: e.target.review.value,
      rating: parseFloat(e.target.rating.value),
      poster: e.target.poster.value,
    }
    fetch('http://localhost:3000/models', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          🎬 Add a New Movie
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter movie title"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Year</label>
            <input
              type="number"
              name="year"
              placeholder="e.g. 2023"
              min="1900"
              max="2099"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Genre
            </label>
            <input
              type="text"
              name="genre"
              placeholder="e.g. Action, Drama, Sci-Fi"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Director
            </label>
            <input
              type="text"
              name="director"
              placeholder="Enter director name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Poster URL
            </label>
            <input
              type="url"
              name="poster"
              placeholder="Enter poster image link"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Review
            </label>
            <textarea
              name="review"
              placeholder="Write your review..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Rating (⭐ out of 10)
            </label>
            <input
              type="number"
              name="rating"
              placeholder="e.g. 8.5"
              min="0"
              max="10"
              step="0.1"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddMovie
