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
import { Button } from "@material-ui/core";
import { useToasts } from "react-toast-notifications";

import {
  markAsFavorite,
  markAsUnFavorite,
  markAsWatched,
  markAsUnWatched
} from "../../actions/movies";
import Movie from "../../models/movie";
import "./rating.scss";

interface IProps {
  markAsFavorite: (movieId) => Promise<Movie>;
  markAsUnFavorite: (movieId) => Promise<Movie>;
  markAsWatched: (movieId) => Promise<Movie>;
  markAsUnWatched: (movieId) => Promise<Movie>;
  movie: Movie;
  movieId: string;
}

const RatingComponent = props => {
  const { addToast } = useToasts();

  const onClickMarkAsFavorite = () => {
    props.markAsFavorite(props.movie.movieId).catch(error => {
      addToast(error.message, { appearance: "error" });
    });
  };

  const onClickMarkAsUnFavorite = () => {
    props.markAsUnFavorite(props.movie.movieId).catch(error => {
      addToast(error.message, { appearance: "error" });
    });
  };

  const onClickMarkAsWatched = () => {
    props.markAsWatched(props.movie.movieId).catch(error => {
      addToast(error.message, { appearance: "error" });
    });
  };

  const onClickMarkAsUnWatched = () => {
    props.markAsUnWatched(props.movie.movieId).catch(error => {
      addToast(error.message, { appearance: "error" });
    });
  };

  return (
    <div className="rating-panel d-flex">
      <div className="d-flex align-items-center watch-container">
        {props.movie.isWatched ? (
          <Button onClick={onClickMarkAsUnWatched} className="rating-btn">
            <RemoveRedEye></RemoveRedEye>
          </Button>
        ) : (
          <Button onClick={onClickMarkAsWatched} className="rating-btn">
            <RemoveRedEyeOutlined></RemoveRedEyeOutlined>
          </Button>
        )}
      </div>
      <div className="d-flex align-items-center favorite-container">
        {props.movie.isFavorite ? (
          <Button onClick={onClickMarkAsUnFavorite} className="rating-btn">
            <Favorite></Favorite>
          </Button>
        ) : (
          <Button onClick={onClickMarkAsFavorite} className="rating-btn">
            <FavoriteBorder></FavoriteBorder>
          </Button>
        )}
      </div>
      <div className="d-flex align-items-center favorite-container">
        {props.movie.rating ? (
          <Button onClick={onClickMarkAsUnFavorite} className="rating-btn">
            <ThumbDownOutlined></ThumbDownOutlined>
          </Button>
        ) : (
          <Button onClick={onClickMarkAsFavorite} className="rating-btn">
            <ThumbUpOutlined></ThumbUpOutlined>
          </Button>
        )}
      </div>
    </div>
  );
};

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
