import MovieAdapter from "./adapters/movie.adapter";
import Movie from "../models/movie";

export default class MoviesService {
  static async retriveMovies(): Promise<Movie[]> {
    const response: Response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=8eb5e86895ea1fa8a6953985cfcf865f&language=hi-IN&page=1&region=IN&with_original_language=hi"
    );

    if (response.ok) {
      const data: any = await response.json();
      const movies: Movie[] = data.results.map(datum => {
        return MovieAdapter.fromResponse(datum);
      });
      return movies;
    } else {
      throw new Error(response.statusText);
    }
  }

  static async retriveMovie(movieId): Promise<Movie> {
    const response: Response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=8eb5e86895ea1fa8a6953985cfcf865f&language=en-US`
    );

    if (response.ok) {
      const data: any = await response.json();
      const movie: Movie = MovieAdapter.fromResponse(data);
      return movie;
    } else {
      throw new Error(response.statusText);
    }
  }
}
