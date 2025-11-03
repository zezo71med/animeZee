import { useEffect, useState } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MoviesCard from "./components/moviesCard";
import { getTrendingSearches, updateSearchCount } from "./ilb/appwrite";
import Trending from "./components/Trending";
import { useSelector } from "react-redux";
import type { RootState } from "./state/Store";
import { useLocation } from "react-router-dom";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_BASEURL = import.meta.env.VITE_TMDB_BASE_URL;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};
  
const App = () => {
  const searchTerm = useSelector((state:RootState)=>state.searchTerm.searchTerm  );
  // const [searchTerm, serSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [trendingList, setTrendingList] = useState<any>([]);
  const stateData= useLocation().state;
  console.log("Location state data:",stateData);
  const fetchMovies = async (query: string) => {
    setIsLoading(true);
    try {
      const endpoint = query
        ? `${API_BASEURL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASEURL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      if (data.Response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }
      setMovieList(data.results);
      if (query && data.results.length > 0) {
        updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setErrorMessage(
        "Failed to fetch movies. Please try again later." + error
      );
    } finally {
      setIsLoading(false);
    }
  };  
  const fetchTrending = async () => {
    try {
      const trending = await getTrendingSearches();

      setTrendingList(trending);
    } catch (error) {
      console.error("Error fetching trending searches:", error);
    }
  };
  useEffect(() => {
    fetchTrending();
  }, []);
  useEffect(() => { 
    fetchMovies(searchTerm);
  }, [searchTerm]);
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt=" Hero Banner" />
          <h1>
            find <span className="text-gradient">Movies</span> you'll Enjoy
            without the hassle
          </h1>
          <Search />
        </header>
        <section>
          <Trending trending={trendingList} />
          <div className="all-movies">
            <h2>All Movies</h2>
            {isLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">{errorMessage}</span>
              </div>
            ) : (
              <ul>
                {movieList.map((movie: any) => (
                  <MoviesCard key={movie.id} movie={movie} />
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};
export default App;
