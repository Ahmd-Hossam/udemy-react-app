import { useEffect, useState } from "react";
import "./movies.componen.css";
function Movies() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const [query, setQuery] = useState("interstellar");
  const [movieId, setMovieId] = useState(null);
  const [movie, setMovie] = useState(null);
  const apiKey = "f84fc31d";

  useEffect(() => {
    if (!query) return;
    const timer = setTimeout(() => {
      getData();
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    getMovieByDetails();
  }, [movieId]);

  async function getData() {
    setLoader(true);
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
      );
      const data = await res.json();
      console.log("data", data);
      setMovies(data.Search || []);
      if (!res.ok) {
        throw new Error("Something went wrong with featch movices");
      }
      if (data.Respnse === "False") {
        throw new Error("Movie not found");
      }
    } catch (err) {
      console.error("Our error is", err);
    } finally {
      setLoader(false);
    }
  }

  async function getMovieByDetails() {
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`
      );
      const data = await res.json();
      setMovie(data);
    } catch (err) {
      console.log(err);
    }
  }

  if (loader) return <p> Loading...</p>;
  return (
    <>
      <div className="container">
        <div>
          <div className="header">
            <Search query={query} setQuery={setQuery} />
          </div>
          {movies.length > 0 ? (
            <ul style={{ marginTop: "2rem" }}>
              {movies.map((ele) => {
                return (
                  <li key={ele.imdbID} onClick={() => setMovieId(ele.imdbID)}>
                    <div className="item">
                      <img src={ele.Poster} alt="" />
                      <h2> {ele.Title}</h2>
                      <span> {ele.Type}</span>
                      <span> {ele.Year}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div style={{ marginTop: "2rem" }}>
              {" "}
              no data fond with "{query}""{" "}
            </div>
          )}
        </div>
        <div className="selected-container">
          <SelectedMovie movieDetails={movie} />
        </div>
      </div>
    </>
  );

  //Search Query
  function Search({ query, setQuery }) {
    return (
      <>
        <input
          type="text"
          placeholder="Search here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
      </>
    );
  }

  //get Selected movie
  function SelectedMovie({ movieDetails }) {
    return (
      <div className="movie-card">
        <img
          src={movieDetails.Poster}
          alt={movieDetails.Title}
          className="movie-poster"
          style={{ width: "100%", height: "600px" }}
        />
        <div className="movie-info">
          <h2>
            {movieDetails.Title} ({movieDetails.Year})
          </h2>
          <p>
            <strong>Genre:</strong> {movieDetails.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movieDetails.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movieDetails.Actors}
          </p>
          <p>
            <strong>Plot:</strong> {movieDetails.Plot}
          </p>
          <p>
            <strong>Language:</strong> {movieDetails.Language}
          </p>
          <p>
            <strong>Country:</strong> {movieDetails.Country}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {movieDetails.imdbRating} / 10
          </p>
          <p>
            <strong>Box Office:</strong> {movieDetails.BoxOffice}
          </p>
          <p>
            <strong>Awards:</strong> 🏆 {movieDetails.Awards}
          </p>
        </div>
      </div>
    );
  }
}

export default Movies;
