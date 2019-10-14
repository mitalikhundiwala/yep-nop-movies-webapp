import { MoviesAction } from "../actions/movies";
import Movie from "../models/movie";
import { AuthAction } from "../actions/auth";

export interface IState {
  entities: { [key: string]: Movie };
}

const defaultState: IState = { entities: {} };

export default (state: IState = defaultState, action): IState => {
  switch (action.type) {
    case MoviesAction.SET_MOVIES:
      const movies: { [key: string]: Movie } = {};
      action.movies.forEach((movie: Movie) => {
        movies[`${movie.movieId}`] = movie;
      });
      return {
        ...state,
        entities: { ...state.entities, ...movies }
      };
    case MoviesAction.SET_MOVIE:
      const fetchedMovies = state.entities || {};
      fetchedMovies[`${action.movie.movieId}`] = action.movie;
      return {
        ...state,
        entities: { ...state.entities, ...fetchedMovies }
      };

    case AuthAction.LOGOUT:
      return defaultState;
    default:
      return state;
  }
};
