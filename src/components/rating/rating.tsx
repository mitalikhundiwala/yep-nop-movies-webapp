import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="#" onClick={this.onClickMarkAsUnWatched}><RemoveRedEye></RemoveRedEye></Link>
          ) : (
            <Link to="#" onClick={this.onClickMarkAsWatched}>
              <RemoveRedEyeOutlined></RemoveRedEyeOutlined>
            </Link>
          )}
        </div>
        <div className="d-flex align-items-center favorite-container p-3">
          {this.props.movie.isFavorite ? (
            <Link to="#" onClick={this.onClickMarkAsUnFavorite}>
              <Favorite></Favorite>
            </Link>
          ) : (
            <Link to="#" onClick={this.onClickMarkAsFavorite}>
              <FavoriteBorder></FavoriteBorder>
            </Link>
          )}
        </div>
        <div className="d-flex align-items-center favorite-container p-3">
          {this.props.movie.rating ? (
            <Link to="#" onClick={this.onClickMarkAsUnFavorite}>
              <ThumbDownOutlined></ThumbDownOutlined>
            </Link>
          ) : (
            <Link to="#" onClick={this.onClickMarkAsFavorite}>
              <ThumbUpOutlined></ThumbUpOutlined>
            </Link>
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
