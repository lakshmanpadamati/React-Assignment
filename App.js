import { useEffect, useState } from "react";
import MoviesList from "./Components/MoviesList";
import "./App.css";
function App() {
  const [movies, setMovies] = useState([]);
  useState("movies");
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data);
      });
  }, []);
  console.log(movies);

  return (
    <ul>
      <header></header>
      <MoviesList movies={movies} />
    </ul>
  );
}

export default App;
