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
    default:
      return state;
  }
};
