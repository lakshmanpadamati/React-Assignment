import { useState } from "react";
import ShowSummary from "../Components/showSummary";
import classes from "./Movie.module.css";
const Movie = (props) => {
  const movie = props.show;
  const [showSummary, setShowSummary] = useState(false);

  const showSummaryHandler = (e) => {
    e.preventDefault();
    setShowSummary(!showSummary);
  };
  return (
    <li className={classes.movie}>
      {!showSummary && (
        <div className={classes.details}>
          <img src={movie.image.medium} alt={movie.name} />{" "}
          <div>
            <span>Movie </span>
            {movie.name}
          </div>
          <div>
            <span>language </span>
            {movie.language}
          </div>
          <div>
            <span>Avg time </span>
            {movie.averageRuntime}
          </div>
          <div className={classes.genres}>
            <span>Genres</span>
            <div>
              <ul>
                {movie?.genres.map((genre, i) => {
                  return <li key={i}>{genre}</li>;
                })}
              </ul>
            </div>
          </div>
          <div>
            <span>Premiered </span>
            {movie.premiered}
          </div>
          <button onClick={showSummaryHandler}>show summary</button>
        </div>
      )}
      {showSummary && (
        <ShowSummary
          className={classes.summary}
          handleShowSummary={showSummaryHandler}
          summary={movie.summary}
          name={movie.name}
          Image={movie.image.medium}
        />
      )}
    </li>
  );
};

export default Movie;
