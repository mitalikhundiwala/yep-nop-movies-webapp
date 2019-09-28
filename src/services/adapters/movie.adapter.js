import Movie from "../../models/movie";

export default class MovieAdapter {
  static fromResponse(data) {
    return new Movie({
      movieId: data.id,
      name: data.title,
      tagline: data.original_title,
      isActive: true,
      language: data.original_language,
      releaseDate: data.release_date,
      synopsis: data.overview,
      poster_image: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
      // themeColorLight: data.themeColorLight,
      // themeColorDark: data.themeColorDark,
      isAdult: data.adult,
      // whichWood: data.whichWood,
      // website: data.website,
      // tmdbId: data.tmdbId,
      // imdbId: data.imdbId,
      // facebookId: data.facebookId,
      // genres: data.genres,
      // directors: data.directors,
      // musicDirectors: data.musicDirectors,
      // cast: data.cast,
      // createdAt: data.createdAt,
      // updatedAt: data.updatedAt,
    });
  }
}
