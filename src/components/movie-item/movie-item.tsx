import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Movie from "../../models/movie";

export const MovieListItem: FunctionComponent<Movie> = ({
  movieId,
  name,
  poster_image,
  releaseDate,
  synopsis
}) => (
  <div className="card">
    <img src={poster_image} className="card-img-top" alt="..." />
    <div className="card-body">
      <Link className="card-link" to={`/movies/${movieId}`}>
        <h5 className="card-title">{name}</h5>
      </Link>
      <p className="card-text">
        <small className="text-muted">{releaseDate}</small>
      </p>
    </div>
  </div>
);

export default connect()(MovieListItem);
