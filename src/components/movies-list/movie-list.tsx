import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { map } from "lodash";

import MovieListItem from "../movie-item/movie-item";
import Movie from "../../models/movie";

import "./movie-list.scss";

interface IProps {
  movies: Movie[];
}

const MovieList: FunctionComponent<IProps> = props => {
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
