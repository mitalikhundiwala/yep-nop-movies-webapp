export default class Movie {
  movieId: string;
  name: string;
  tagline: string;
  isActive: string;
  language: string;
  releaseDate: string;
  synopsis: string;
  poster_image: string;
  backdropImageURL: string;
  thumbnailImageURL: string;
  themeColorLight: string;
  themeColorDark: string;
  isAdult: string;
  whichWood: string;
  website: string;
  tmdbId: string;
  imdbId: string;
  facebookId: string;
  genres: Array<any>;
  genreString: string;
  directors: Array<any>;
  directorString: string;
  musicDirectors: Array<any>;
  musicDirectorsString: string;
  cast: Array<any>;
  castString: string;
  isFavorite: boolean;
  isWatched: boolean;
  rating: boolean;
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
    this.backdropImageURL = data.backdropImageURL;
    this.thumbnailImageURL = data.thumbnailImageURL;
    this.themeColorLight = data.themeColorLight;
    this.themeColorDark = data.themeColorDark;
    this.isAdult = data.isAdult;
    this.whichWood = data.whichWood;
    this.website = data.website;
    this.tmdbId = data.tmdbId;
    this.imdbId = data.imdbId;
    this.facebookId = data.facebookId;
    this.genres = data.genres;
    this.genreString = this.getGenreString();
    this.directors = data.directors;
    this.directorString = this.getDirectorString();
    this.musicDirectors = data.musicDirectors;
    this.musicDirectorsString = this.getMusicDirectorString();
    this.cast = data.cast;
    this.castString = this.getCastString();
    this.isFavorite = data.isFavorite;
    this.isWatched = data.isWatched;
    this.rating = data.rating;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  getGenreString() {
    return this.genres.map(genre => genre.name).toString();
  }

  getDirectorString() {
    return this.directors.map(director => director.name).toString();
  }

  getMusicDirectorString() {
    return this.musicDirectors.map(director => director.name).toString();
  }

  getCastString() {
    return this.cast.map(cast => cast.name).toString();
  }
}
