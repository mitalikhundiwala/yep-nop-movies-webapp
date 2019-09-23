import MovieAdapter from "./adapters/movie.adapter";

export default class MoviesService {
  static async retriveMovies() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=8eb5e86895ea1fa8a6953985cfcf865f&language=hi-IN&page=1&region=IN&with_original_language=hi"
    );

    if (response.ok) {
      const data = await response.json();
      const movies = data.results.map(datum => {
        return MovieAdapter.fromResponse(datum);
      });
      return movies;
    } else {
      throw new Error(response.statusText);
    }
  }
}
