import React from "react";
import { connect } from "react-redux";
import MovieList from "../../components/movies-list/movie-list";

import { startSetMovies } from "../../actions/movies";

export class DashboardPage extends React.Component {
  componentDidMount() {
    this.props.startSetMovies();
  }
  render() {
    return <MovieList></MovieList>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startSetMovies: () => dispatch(startSetMovies())
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(DashboardPage);
