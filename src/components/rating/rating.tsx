import React from "react";
import { connect } from "react-redux";
import {RemoveRedEye, RemoveRedEyeOutlined, Favorite, FavoriteBorder} from '@material-ui/icons';

import {
  markAsFavorite,
  markAsUnFavorite,
  markAsWatched,
  markAsUnWatched
} from "../../actions/movies";
import Movie from "../../models/movie";

interface IProps {
  movieId: string;
  markAsFavorite: (movieId) => Promise<Movie>;
  markAsUnFavorite: (movieId) => Promise<Movie>;
  markAsWatched: (movieId) => Promise<Movie>;
  markAsUnWatched: (movieId) => Promise<Movie>;
}

export class RatingComponent extends React.Component {
  props: IProps;

  onClickMarkAsFavorite = () => {
    this.props.markAsFavorite(this.props.movieId);
  };

  onClickMarkAsUnFavorite = () => {
    this.props.markAsUnFavorite(this.props.movieId);
  };

  onClickMarkAsWatched = () => {
    this.props.markAsWatched(this.props.movieId);
  };

  onClickMarkAsUnWatched = () => {
    this.props.markAsUnWatched(this.props.movieId);
  };

  render() {
    return (
      <div className="rating-panel d-flex">
        <div className="d-flex align-items-center watch-container p-3">
          
          <RemoveRedEye onClick={this.onClickMarkAsWatched}></RemoveRedEye>
          <RemoveRedEyeOutlined onClick={this.onClickMarkAsUnWatched}></RemoveRedEyeOutlined>
        </div>
        <div className="d-flex align-items-center favorite-container p-3">
          <Favorite onClick={this.onClickMarkAsFavorite}></Favorite>
          <FavoriteBorder  onClick={this.onClickMarkAsUnFavorite}></FavoriteBorder>
        </div>
        <div className="rating-container"></div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    markAsFavorite: () => dispatch(markAsFavorite(props.movieId)),
    markAsUnFavorite: () => dispatch(markAsUnFavorite(props.movieId)),
    markAsWatched: () => dispatch(markAsWatched(props.movieId)),
    markAsUnWatched: () => dispatch(markAsUnWatched(props.movieId))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(RatingComponent);
