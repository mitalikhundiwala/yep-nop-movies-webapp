import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { map } from "lodash";

import MovieListItem from "../movie-item/movie-item";
import Movie from "../../models/movie";

import "./movie-list.scss";
import { IStore } from "../../store/configureStore";

interface IProps {
  movies: { [key: string]: Movie };
}

const MovieList: FunctionComponent<IProps> = (props: Partial<IProps>) => {
  return (
    <div className="m-3">
      <p className="h3 mt-3 mb-3">Upcoming Movies</p>

      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          {map(props.movies, movie => {
            return <MovieListItem key={movie.movieId} {...movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IStore, props: Partial<IProps>) => {
  return {
    movies: state.movies.entities
  };
};

export default connect(mapStateToProps)(MovieList);
