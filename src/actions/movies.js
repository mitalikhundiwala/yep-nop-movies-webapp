import MoviesService from "../services/movies.service";

export const setMovies = movies => ({
  type: "SET_MOVIES",
  movies
});

export const startSetMovies = () => {
  return async(dispatch, getState) => {
    const movies = await MoviesService.retriveMovies();
    dispatch(setMovies(movies));
    return movies;
  };
};

export const setMovie = (movie) => ({
  type: "SET_MOVIE",
  movie
});

export const startSetMovie = (movieId) => {
  return async(dispatch, getState) => {
    const movie = await MoviesService.retriveMovie(movieId);
    dispatch(setMovie(movie));
    return movie;
  }
}
