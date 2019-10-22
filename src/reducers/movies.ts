import { MoviesAction } from "../actions/movies";
import Movie from "../models/movie";
import { AuthAction } from "../actions/auth";

export interface IState {
  entities: { [key: string]: Movie };
}

const defaultState: IState = { entities: {} };

export default (state: IState = defaultState, action): IState => {
  switch (action.type) {
    case MoviesAction.SET_MOVIES: {
      const movies: { [key: string]: Movie } = {};
      action.movies.forEach((movie: Movie) => {
        movies[`${movie.movieId}`] = movie;
      });
      return {
        ...state,
        entities: { ...state.entities, ...movies }
      };
    }
    case MoviesAction.SET_MOVIE: {
      const movies = state.entities || {};
      movies[`${action.movie.movieId}`] = action.movie;
      return {
        ...state,
        entities: { ...state.entities, ...movies }
      };
    }
    case MoviesAction.MARK_AS_FAVORITE: {
      const movies = state.entities || {};
      return {
        ...state,
        entities: {
          ...state.entities,
          [`${action.movieId}`]: new Movie({
            ...state.entities[`${action.movieId}`],
            isFavorite: true
          })
        }
      };
    }
    case MoviesAction.MARK_AS_UNFAVORITE: {
      const movies = state.entities || {};
      return {
        ...state,
        entities: {
          ...state.entities,
          [`${action.movieId}`]: new Movie({
            ...state.entities[`${action.movieId}`],
            isFavorite: false
          })
        }
      };
    }
    case MoviesAction.MARK_AS_WATCHED: {
      const movies = state.entities || {};
      return {
        ...state,
        entities: {
          ...state.entities,
          [`${action.movieId}`]: new Movie({
            ...state.entities[`${action.movieId}`],
            isWatched: true
          })
        }
      };
    }
    case MoviesAction.MARK_AS_UNWATCHED: {
      const movies = state.entities || {};
      return {
        ...state,
        entities: {
          ...state.entities,
          [`${action.movieId}`]: new Movie({
            ...state.entities[`${action.movieId}`],
            isWatched: false
          })
        }
      };
    }
    case AuthAction.LOGOUT:
      return defaultState;
    default:
      return state;
  }
};
