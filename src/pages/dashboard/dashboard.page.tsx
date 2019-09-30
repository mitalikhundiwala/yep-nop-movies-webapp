import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "../../components/movies-list/movie-list";

import { startSetMovies } from "../../actions/movies";
import Movie from "../../models/movie";

interface IProps {
  startSetMovies: () => Promise<Movie[]>;
}

export class DashboardPage extends Component<IProps> {
  props: IProps;

  componentDidMount() {
    console.log('Component Mounting');
    this.props.startSetMovies();
  }
  render() {
    return <MovieList></MovieList>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startSetMovies: () => dispatch(startSetMovies())
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(DashboardPage);
