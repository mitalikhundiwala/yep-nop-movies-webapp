import MoviesService from "../services/movies.service";

export enum MoviesAction {
  SET_MOVIES = "SET_MOVIES",
  SET_MOVIE = "SET_MOVIE"
}

export const setMovies = movies => ({
  type: MoviesAction.SET_MOVIES,
  movies
});

export const startSetMovies = () => {
  return async (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;
    const movies = await MoviesService.retriveMovies(accessToken);
    dispatch(setMovies(movies));
    return movies;
  };
};

export const setMovie = movie => ({
  type: MoviesAction.SET_MOVIE,
  movie
});

export const startSetMovie = movieId => {
  return async (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;
    const movie = await MoviesService.retriveMovie(movieId, accessToken);
    dispatch(setMovie(movie));
    return movie;
  };
};
