import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import format from "date-fns/format";
import Movie from "../../models/movie";

export const MovieListItem: FunctionComponent<Partial<Movie>> = ({
  movieId,
  name,
  poster_image,
  releaseDate,
  genreString
}) => (
  <div className="col-sm-12 col-sm-6 col-md-4 col-lg-2 pb-4">
    <Link className="card-link" to={`/movies/${movieId}`}>
      <div className="card rounded border-0">
        <img src={poster_image} className="card-img-top " alt="..." />
        <div className="card-body">
          <div className="row">
            <div className="col-3 pl-2 pr-1">
              <small className="text-muted">
                {format(new Date(releaseDate), "dd MMM")}
              </small>
            </div>
            <div className="col-9 pl-1 pr-1">
              <div className="">{name}</div>
              <div className="text-muted">{genreString}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default connect()(MovieListItem);
