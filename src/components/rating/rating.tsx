import React from "react";
import { connect } from "react-redux";
import {
  RemoveRedEye,
  RemoveRedEyeOutlined,
  Favorite,
  FavoriteBorder,
  ThumbDown,
  ThumbUp,
  ThumbDownOutlined,
  ThumbUpOutlined
} from "@material-ui/icons";

import {
  markAsFavorite,
  markAsUnFavorite,
  markAsWatched,
  markAsUnWatched
} from "../../actions/movies";
import Movie from "../../models/movie";

interface IProps {
  markAsFavorite: (movieId) => Promise<Movie>;
  markAsUnFavorite: (movieId) => Promise<Movie>;
  markAsWatched: (movieId) => Promise<Movie>;
  markAsUnWatched: (movieId) => Promise<Movie>;
  movie: Movie;
  movieId: string;
}

export class RatingComponent extends React.Component {
  props: IProps;

  onClickMarkAsFavorite = () => {
    this.props.markAsFavorite(this.props.movie.movieId);
  };

  onClickMarkAsUnFavorite = () => {
    this.props.markAsUnFavorite(this.props.movie.movieId);
  };

  onClickMarkAsWatched = () => {
    this.props.markAsWatched(this.props.movie.movieId);
  };

  onClickMarkAsUnWatched = () => {
    this.props.markAsUnWatched(this.props.movie.movieId);
  };

  render() {
    return (
      <div className="rating-panel d-flex">
        <div className="d-flex align-items-center watch-container p-3">
          {this.props.movie.isWatched ? (
            <RemoveRedEye onClick={this.onClickMarkAsUnWatched}></RemoveRedEye>
          ) : (
            <RemoveRedEyeOutlined
              onClick={this.onClickMarkAsWatched}
            ></RemoveRedEyeOutlined>
          )}
        </div>
        <div className="d-flex align-items-center favorite-container p-3">
          {this.props.movie.isFavorite ? (
            <Favorite onClick={this.onClickMarkAsUnFavorite}></Favorite>
          ) : (
            <FavoriteBorder
              onClick={this.onClickMarkAsFavorite}
            ></FavoriteBorder>
          )}
        </div>
        <div className="d-flex align-items-center favorite-container p-3">
          {this.props.movie.rating ? (
            <ThumbDownOutlined onClick={this.onClickMarkAsUnFavorite}></ThumbDownOutlined>
          ) : (
            <ThumbUpOutlined
              onClick={this.onClickMarkAsFavorite}
            ></ThumbUpOutlined>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props: IProps) => {
  return {
    markAsFavorite: () => dispatch(markAsFavorite(props.movieId)),
    markAsUnFavorite: () => dispatch(markAsUnFavorite(props.movieId)),
    markAsWatched: () => dispatch(markAsWatched(props.movieId)),
    markAsUnWatched: () => dispatch(markAsUnWatched(props.movieId))
  };
};

const mapStateToProps = (state, props: IProps) => {
  return {
    movie: state.movies.entities[props.movieId]
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingComponent);
