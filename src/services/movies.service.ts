import MovieAdapter from "./adapters/movie.adapter";
import Movie from "../models/movie";

export default class MoviesService {
  static async retriveMovies(accessToken: string): Promise<Movie[]> {
    const response: Response = await fetch(
      `${process.env.API_BASE_URL}/movies/nowplaying`,
      {
        headers: new Headers({
          Authorization: `Bearer ${accessToken}`
        })
      }
    );

    if (response.ok) {
      const data: any = await response.json();

      const movies: Movie[] = data.map(datum => {
        return MovieAdapter.fromResponse(datum);
      });
      return movies;
    } else {
      throw new Error(response.statusText);
    }
  }

  static async retriveMovie(
    movieId: string,
    accessToken: string
  ): Promise<Movie> {
    const response: Response = await fetch(
      `${process.env.API_BASE_URL}/movies/${movieId}`,
      {
        headers: new Headers({
          Authorization: `Bearer ${accessToken}`
        })
      }
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
