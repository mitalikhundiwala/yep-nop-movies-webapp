import { MoviesAction } from "../actions/movies";
import Movie from "../models/movie";

export interface IState {
  movies: { [key: string]: Movie };
}

const defaultState: IState = { movies: {} };

export default (state: IState = defaultState, action): IState => {
  switch (action.type) {
    case MoviesAction.SET_MOVIES:
      const movies: { [key: string]: Movie } = {};
      action.movies.forEach((movie: Movie) => {
        movies[`${movie.movieId}`] = movie;
      });
      return {
        ...state,
        ...movies
      };
    case MoviesAction.SET_MOVIE:
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
