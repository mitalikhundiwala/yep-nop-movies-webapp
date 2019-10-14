import Movie from "../../models/movie";

export default class MovieAdapter {
  static fromResponse(data: any): Movie {
    return new Movie({
      movieId: data.movieId,
      name: data.name,
      tagline: data.tagline,
      isActive: data.isActive,
      language: data.language,
      releaseDate: data.releaseDate,
      synopsis: data.synopsis,
      poster_image: data.posterImageURL,
      backdropImageURL: data.backdropImageURL,
      thumbnailImageURL: data.thumbnailImageURL,
      themeColorLight: data.themeColorLight,
      themeColorDark: data.themeColorDark,
      isAdult: data.isAdult,
      whichWood: data.whichWood,
      website: data.website,
      tmdbId: data.tmdbId,
      imdbId: data.imdbId,
      // facebookId: data.facebookId,
      genres: data.genres,
      directors: data.directors,
      musicDirectors: data.musicDirectors,
      cast: data.cast,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });
  }
}
