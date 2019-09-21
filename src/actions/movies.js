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
