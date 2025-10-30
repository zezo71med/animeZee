

const MoviesCard = ({ movie}: { movie: any}) => {
  const transfotmImgUrl = (path: string) => {
    if (!path) return "/no-movie.png";
    // const BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;
    return `https://image.tmdb.org/t/p/original${path}`;
  };
  return (
    <div className="movie-card">
      <img src={transfotmImgUrl(movie.poster_path)} alt={movie.title} />
      <div className="mt-4">
        <h3>{movie.title}</h3>
        <div className="content">
          <div className="rating">
            <img src="./star.svg" alt="star icon" />
            <p>{movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span>●</span>
          <p className="lang">{movie.original_language}</p>
          <span>●</span>
          <p className="year">
            {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
