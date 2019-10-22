import MoviesService from "../services/movies.service";

export enum MoviesAction {
  SET_MOVIES = "SET_MOVIES",
  SET_MOVIE = "SET_MOVIE",
  MARK_AS_FAVORITE = "MARK_AS_FAVORITE",
  MARK_AS_UNFAVORITE = "MARK_AS_UNFAVORITE",
  MARK_AS_WATCHED = "MARK_AS_WATCHED",
  MARK_AS_UNWATCHED = "MARK_AS_UNWATCHED"
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

export const setMarkAsFavorite = movieId => ({
  type: MoviesAction.MARK_AS_FAVORITE,
  movieId
});

export const markAsFavorite = movieId => {
  return async (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;
    await MoviesService.markAsFavorite(movieId, accessToken);
    dispatch(setMarkAsFavorite(movieId));
    return true;
  };
};

export const setMarkAsUnFavorite = movieId => ({
  type: MoviesAction.MARK_AS_UNFAVORITE,
  movieId
});

export const markAsUnFavorite = movieId => {
  return async (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;
    const movie = await MoviesService.markAsUnFavorite(movieId, accessToken);
    dispatch(setMarkAsUnFavorite(movieId));
    return true;
  };
};

export const setMarkAsWatched = movieId => ({
  type: MoviesAction.MARK_AS_WATCHED,
  movieId
});

export const markAsWatched = movieId => {
  return async (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;
    await MoviesService.markAsWatched(movieId, accessToken);
    dispatch(setMarkAsWatched(movieId));
    return true;
  };
};

export const setMarkAsUnwatched = movieId => ({
  type: MoviesAction.MARK_AS_UNWATCHED,
  movieId
});

export const markAsUnWatched = movieId => {
  return async (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;
    await MoviesService.markAsUnWatched(movieId, accessToken);
    dispatch(setMarkAsUnwatched(movieId));
    return true;
  };
};
