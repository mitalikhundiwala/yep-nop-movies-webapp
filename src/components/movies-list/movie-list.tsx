import React from "react";
import { connect } from "react-redux";
import { map } from "lodash";

import MovieListItem from "../movie-item/movie-item";

import "./movie-list.scss";

const MovieList = props => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card-columns">
        {map(props.movies, movie => {
          return <MovieListItem key={movie.movieId} {...movie} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps)(MovieList);
