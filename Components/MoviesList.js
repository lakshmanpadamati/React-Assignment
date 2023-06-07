import Movie from "./Movie";
const MoviesList = (props) => {
  return props.movies.map((movie) => {
    return (
      <Movie
        key={movie.show.id}
        sno={props.sno}
        setSno={props.setSno}
        showSummary={props.showSummary}
        handleShowSummary={props.handleShowSummary}
        {...movie}
      />
    );
  });
};
export default MoviesList;
