export default (state = {}, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      const movies = {};
      action.movies.forEach(movie => {
        movies[`${movie.movieId}`] = movie;
      });
      return {
        ...state,
        ...movies
      };
    case "SET_MOVIE":
      const fetchedMovies = state.movies || {};
      fetchedMovies[`${action.movie.movieId}`] = action.movie;
      return {
        ...state,
        ...fetchedMovies
      };
    default:
      return state;
  }
};
