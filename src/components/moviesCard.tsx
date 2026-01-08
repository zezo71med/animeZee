import { useRef } from "react";

const MoviesCard = ({ movie }: { movie: any }) => {
  const imgHolder = useRef<HTMLDivElement>(null);

  const transfotmImgUrl = (path: string) => {
    if (!path) return "/no-movie.png";
    return `https://image.tmdb.org/t/p/original${path}`;
  };
  return (
    <div className="movie-card">
      <div className="relative">
        <img
          src={transfotmImgUrl(movie.poster_path)}
          alt={movie.title}
          onError={(e) => (e.currentTarget.src = "/no-movie.png")}
        />

        <div
          className="img-port"
          ref={imgHolder}
          style={{
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
          onMouseEnter={() => {
            if (imgHolder.current) imgHolder.current.style.opacity = "1";
          }}
          onMouseLeave={() => {
            if (imgHolder.current) imgHolder.current.style.opacity = "0";
          }}
        >
          <span
            style={{
              background: "#322f2f9e",
              height: "100%",
              textAlign: "center",
            }}
          >
            {movie.overview}
          </span>
        </div>
      </div>
      <div className="mt-4">
      {/* {movie} */}
        <h3 title={movie.title}>{movie.title}</h3>
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
