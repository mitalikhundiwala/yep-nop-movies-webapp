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
import { useToasts } from "react-toast-notifications";

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

const RatingComponent = props => {
  // const { addToast } = useToasts();

  const onClickMarkAsFavorite = () => {
    props.markAsFavorite(props.movie.movieId).catch(error => {
      // addToast(error.message, { appearance: "error" });
    });
  };

  const onClickMarkAsUnFavorite = () => {
    props.markAsUnFavorite(props.movie.movieId).catch(error => {
      // addToast(error.message, { appearance: "error" });
    });
  };

  const onClickMarkAsWatched = () => {
    props.markAsWatched(props.movie.movieId).catch(error => {
      // addToast(error.message, { appearance: "error" });
    });
  };

  const onClickMarkAsUnWatched = () => {
    props.markAsUnWatched(props.movie.movieId).catch(error => {
      // addToast(error.message, { appearance: "error" });
    });
  };

  return (
    <div className="rating-panel d-flex">
      <div className="d-flex align-items-center watch-container p-3">
        {props.movie.isWatched ? (
          <Link to="#" onClick={onClickMarkAsUnWatched}>
            <RemoveRedEye></RemoveRedEye>
          </Link>
        ) : (
          <Link to="#" onClick={onClickMarkAsWatched}>
            <RemoveRedEyeOutlined></RemoveRedEyeOutlined>
          </Link>
        )}
      </div>
      <div className="d-flex align-items-center favorite-container p-3">
        {props.movie.isFavorite ? (
          <Link to="#" onClick={onClickMarkAsUnFavorite}>
            <Favorite></Favorite>
          </Link>
        ) : (
          <Link to="#" onClick={onClickMarkAsFavorite}>
            <FavoriteBorder></FavoriteBorder>
          </Link>
        )}
      </div>
      <div className="d-flex align-items-center favorite-container p-3">
        {props.movie.rating ? (
          <Link to="#" onClick={onClickMarkAsUnFavorite}>
            <ThumbDownOutlined></ThumbDownOutlined>
          </Link>
        ) : (
          <Link to="#" onClick={onClickMarkAsFavorite}>
            <ThumbUpOutlined></ThumbUpOutlined>
          </Link>
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
