export default class Movie {
  movieId: string;
  name: string;
  tagline: string;
  isActive: string;
  language: string;
  releaseDate: string;
  synopsis: string;
  poster_image: string;
  themeColorLight: string;
  themeColorDark: string;
  isAdult: string;
  whichWood: string;
  website: string;
  tmdbId: string;
  imdbId: string;
  facebookId: string;
  genres: string;
  directors: string;
  musicDirectors: string;
  cast: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data) {
    this.movieId = data.movieId;
    this.name = data.name;
    this.tagline = data.tagline;
    this.isActive = data.isActive;
    this.language = data.language;
    this.releaseDate = data.releaseDate;
    this.synopsis = data.synopsis;
    this.poster_image = data.poster_image;
    this.themeColorLight = data.themeColorLight;
    this.themeColorDark = data.themeColorDark;
    this.isAdult = data.isAdult;
    this.whichWood = data.whichWood;
    this.website = data.website;
    this.tmdbId = data.tmdbId;
    this.imdbId = data.imdbId;
    this.facebookId = data.facebookId;
    this.genres = data.genres;
    this.directors = data.directors;
    this.musicDirectors = data.musicDirectors;
    this.cast = data.cast;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}
