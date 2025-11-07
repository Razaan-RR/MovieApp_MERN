import { Link } from "react-router"

function MovieCard({ movie }) {
  const { _id, title, poster, review, rating } = movie
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img className="w-80 h-80 pt-4" src={poster} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title} <div className="badge badge-secondary">{rating}⭐</div>
        </h2>
        <p>{review}</p>
        <div className="card-actions justify-end">
          <Link to={`/movie-details/${_id}`} className="badge badge-outline">
            Watch Now
          </Link>
          <div className="badge badge-outline">Download</div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
