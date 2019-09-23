import React from "react";
import { connect } from "react-redux";

export const MovieDetail = props => {
  return <div className="container">{props.movie.name}</div>;
};

const mapStateToProps = (state, props) => {
  return {
    movie: state.movies[props.match.params.id]
  };
};

export default connect(mapStateToProps)(MovieDetail);
